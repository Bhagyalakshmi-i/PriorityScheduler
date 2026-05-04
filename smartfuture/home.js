let processes=[];

function getPriority(cpu){
if(cpu>70) return "High";
if(cpu>40) return "Medium";
return "Low";
}

function addProcess(){
let name=document.getElementById("name").value.trim();
let cpu=parseInt(document.getElementById("cpu").value);

if(name==="" || isNaN(cpu) || cpu<0 || cpu>100){
alert("Enter valid values");
return;
}

processes.push({
id:Date.now(),
name,
cpu
});

document.getElementById("name").value="";
document.getElementById("cpu").value="";
updateUI();
}

function removeProcess(id){
processes=processes.filter(p=>p.id!==id);
updateUI();
}

function updateUI(){
let table=document.getElementById("tableBody");
table.innerHTML="";

processes.sort((a,b)=>b.cpu-a.cpu);

let totalCpu=0;
let high=0;

processes.forEach(p=>{
let priority=getPriority(p.cpu);
totalCpu+=p.cpu;
if(priority==="High") high++;

table.innerHTML+=`
<tr>
<td>${p.name}</td>
<td>
${p.cpu}%
<div class="progress">
<div class="fill" style="width:${p.cpu}%"></div>
</div>
</td>
<td class="${priority.toLowerCase()}">${priority}</td>
<td><button class="deleteBtn" onclick="removeProcess(${p.id})">Delete</button></td>
</tr>`;
});

document.getElementById("total").innerText=processes.length;
document.getElementById("avg").innerText=processes.length ? (totalCpu/processes.length).toFixed(1)+"%" : "0%";
document.getElementById("high").innerText=high;
}

document.addEventListener("mousemove",(e)=>{
let box=document.getElementById("mainBox");
let x=(window.innerWidth/2 - e.clientX)/48;
let y=(window.innerHeight/2 - e.clientY)/48;
box.style.transform=`rotateY(${x}deg) rotateX(${-y}deg) translateZ(8px)`;
});