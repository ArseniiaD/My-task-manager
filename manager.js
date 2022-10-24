// MY TASK MANAGER - TERMINAL

const fs = require('fs');
const readline = require('readline');

let tasks = ["task1", "task2", "task3"]

const showtasks = () => {
    console.log(tasks)
}
const prompt = require('prompt-sync')();
var file = fs.readFileSync('text.txt', 'utf8');
console.log(file);

var rl = readline.createInterface( process.stdin, process.stdout);
rl.question("Make your choice:", (number) => {
 if (number == 1) {
console.log('Your tasks are: ' + tasks);
console.log(file);}
else if (number == 2) { 
    let addTask = prompt("Add a new task:");
    tasks[tasks.length] = addTask;
    console.log(tasks);
    console.log(file);
}
else if (number == 3) {
let deleteTask = prompt("Delete the task:");
delete tasks[deleteTask-1];
console.log(tasks);
console.log(file);
}
else if (number == 4) {
    let doneTask = prompt("Which task is done?");
    tasks[doneTask-1] = tasks[doneTask-1] + " done";
    console.log(tasks);
    console.log(file);
}
else {console.log("Final")}
rl.close();
});
