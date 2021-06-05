const Task = require('./do-item.js');

module.exports = class toDoList {
    constructor(){
        this.tasks = [];
            
    }

    // Creates an new task and pushes onto tasks array. 
    newTask(title){
        let newTask = this.newItem(title);
        this.tasks.push(newTask);
    }

    // factory method for implementing a task.
    newItem(title) {
        return new Task(title);
    }

    // Number of items in to-do list.
    getNumber(){
        return this.tasks.length;
    }


  }


  //Ideas
  // sort by prioriy, build array with priority value as indexes

  // 


