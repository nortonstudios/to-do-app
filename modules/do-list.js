const Task = require('./task.js');

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

    // Returns task based on index. 
    getTask(index){
        if(index < 0 || index > this.tasks.length - 1){
            throw new Error('Index out of bounds');
        }
        if(/*!index ||*/ typeof index !== 'number'){
            throw new Error('Index not a number');
        }
        return this.tasks[index];
    }

    // Searches for task based on title.
    getTaskByTitle(title){
        this.titleCheck(title);
        const index = this.getIndexByTitle(title);
        if (index < 0){
            return this.newItem('Task not found');
        }
        return this.getTask(index);
    }

    //Serches for index by title. Returns index or -1 for 'not found'.
    getIndexByTitle(title){
        for (let i = 0; i < this.tasks.length; i++) {
            const currentTask = this.tasks[i];
            if(title.toLowerCase() == currentTask.getTitle().toLowerCase()){
                return i;
            }
        }
        return -1;
    }

    //checks for valid title format
    titleCheck(title){
        if( !title || typeof title !== 'string'){
            throw new Error('Invalid title.');
        }
    }

    // returns entire list as array
    getList(){
        return this.tasks;
    }

    //removes a task from list
    remove(index){
        if(this.tasks.length > 0 && this.tasks.length >= index && typeof index === 'number' ){
            this.tasks.splice(index, 1);
        }
    }
  }


  //Ideas
  // sort by prioriy, build array with priority value as indexes

  // return to do list between indexes? top ten list?

  // return to do list for a day, week, hour.

  // 


