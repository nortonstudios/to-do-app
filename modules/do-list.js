const Task = require('./do-item.js');

module.exports = class toDoList {
    constructor(){
            
    }

    newItem = () => {
        
        return new Task();
    }

  }



