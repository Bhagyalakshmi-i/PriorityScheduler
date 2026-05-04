# Dynamic Priority Scheduler

Dynamic Priority Scheduler is a web-based project that simulates operating system process scheduling using dynamic priority based on CPU usage. It helps users understand how the CPU manages multiple processes by automatically assigning priorities and updating them in real time.

## Project Overview

In this project, users can enter a process name and CPU usage. The system validates the input, assigns a priority level automatically, and sorts the processes in descending order of CPU usage. The dashboard also displays important statistics and visual elements for better understanding.

## Features

- Add new processes with process name and CPU usage
- Delete existing processes
- Automatic priority assignment based on CPU usage
- Real-time sorting of processes
- Dashboard with total processes and average CPU usage
- Visual progress bars for CPU utilization
- Responsive and interactive UI
- Animated and attractive interface

## Priority Rules

- High Priority: CPU usage > 70
- Medium Priority: CPU usage > 40
- Low Priority: CPU usage <= 40

## Technologies Used

- HTML
- CSS
- JavaScript
- Google Fonts (Orbitron)
- GitHub for version control and collaboration

## How It Works

1. Enter the process name and CPU usage.
2. Validate the input.
3. Assign priority based on CPU usage.
4. Sort processes in descending order of CPU usage.
5. Update the dashboard and process table instantly.
6. Display the final output with real-time changes.

## Module Breakdown

### 1. User Interface Module
Handles the overall layout of the application including the dashboard, input fields, process table, and statistics cards.

### 2. Input Module
Accepts process details and validates the data before processing.

### 3. Scheduling Logic Module
Assigns priority dynamically based on CPU usage values.

### 4. Process Management Module
Stores process data and manages adding and deleting processes.

### 5. UI Update Module
Refreshes the table and dashboard whenever any change occurs.

### 6. Animation Module
Adds visual effects and makes the interface more engaging.

## Future Scope

- Gantt chart visualization
- Database integration for permanent storage
- Support for advanced scheduling algorithms like Round Robin and FCFS
- Real-time CPU simulation
- Improved analytics and UI enhancements

## Conclusion

Dynamic Priority Scheduler successfully demonstrates the concept of process scheduling in operating systems in a simple, interactive, and visual way.


