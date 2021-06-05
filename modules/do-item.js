
// Object for to-do list items. 
module.exports = class Task{
    constructor(title = 'Untitled Task', priority = 500){
        // if(id == undefined){
        //     throw new Error('no id');
        // } else {
        //     this.id = id;
        // }
        //this.id = 1;
        this.title = title;
        this.description = 'No description';
        this.startTime = Date.now();
        this.due = -1;
        this.plannedDuration = 1;
        this.priority = priority; // greater than 0. 1 is high priority.
        // completed property
     }

     //Changes title of item. Expects a string.
     changeTitle(newTitle){
         if(!newTitle || typeof newTitle !== 'string'){
             throw new Error('No title in argument string.')
         }
         this.title = newTitle;
     }

     // Retruns item's description as a String.
     getDesc(){
         return this.description;
     }

     // Changes description of item. Expects a string.
     newDesc(description){
         if(!description || typeof description !== 'string'){
             throw new Error('Ne dexcription in argument string.');
         }
         this.description = description;
     }

     // Returns time task was created.
     getStart(){
         return this.startTime;
     }

     // Returns tasks priority.
     getPriority(){
         return this.priority;
     }

     // Sets tasks priority, Expects an int. Ceilings any decimals.
     setPriority(p){
         if(!p || typeof p !== 'number' || p <= 0){
            throw new Error('Invalid priority.');
         }
         this.priority = Math.ceil(p);
     }


}

// Notes and to-do
// set a differnent start time.
// new json based initialization
