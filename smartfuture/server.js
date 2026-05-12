const express = require("express");
const cors = require("cors");
const fs = require("fs");
const os = require("os");
const { exec } = require("child_process");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

let processes = [];

// Priority Logic
function getPriority(cpu) {
  if (cpu > 70) return "High";
  if (cpu > 40) return "Medium";
  return "Low";
}

/* ================================================= */
/*            SYSTEM CALL : FILE SYSTEM              */
/* ================================================= */

// Save processes to file
function saveProcesses() {
  fs.writeFileSync(
    "processes.json",
    JSON.stringify(processes, null, 2)
  );
}

// Load processes from file
if (fs.existsSync("processes.json")) {
  processes = JSON.parse(fs.readFileSync("processes.json"));
}

/* ================================================= */
/*                GET ALL PROCESSES                  */
/* ================================================= */

app.get("/api/processes", (req, res) => {
  res.json(processes);
});

/* ================================================= */
/*                ADD PROCESS                        */
/* ================================================= */

app.post("/api/processes", (req, res) => {
  const { name, cpu } = req.body;

  if (!name || cpu < 0 || cpu > 100) {
    return res.status(400).json({
      message: "Invalid Data",
    });
  }

  const newProcess = {
    id: Date.now(),
    name,
    cpu,
    priority: getPriority(cpu),
  };

  processes.push(newProcess);

  saveProcesses();

  res.status(201).json(newProcess);
});

/* ================================================= */
/*                DELETE PROCESS                     */
/* ================================================= */

app.delete("/api/processes/:id", (req, res) => {
  const id = Number(req.params.id);

  processes = processes.filter((p) => p.id !== id);

  saveProcesses();

  res.json({
    message: "Process Deleted",
  });
});

/* ================================================= */
/*          SYSTEM CALL : OS INFORMATION             */
/* ================================================= */

app.get("/api/system-info", (req, res) => {
  res.json({
    platform: os.platform(),
    architecture: os.arch(),
    totalMemory: os.totalmem(),
    freeMemory: os.freemem(),
    cpuCores: os.cpus().length,
    hostname: os.hostname(),
  });
});

/* ================================================= */
/*      SYSTEM CALL : EXECUTE OS TERMINAL COMMAND    */
/* ================================================= */

app.get("/api/running-processes", (req, res) => {

  // Windows
  const command =
    process.platform === "win32"
      ? "tasklist"
      : "ps -aux";

  exec(command, (error, stdout, stderr) => {

    if (error) {
      return res.status(500).json({
        error: error.message,
      });
    }

    res.json({
      output: stdout,
    });

  });
});

/* ================================================= */

app.listen(PORT, () => {
  console.log(`Server Running on Port ${PORT}`);
});