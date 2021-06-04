
module.exports = class Task{
    constructor(title = 'Untitled Task'){
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
        this.priority = 5;
        // completed property
     }

     changeTitle(newTitle){
         if(!newTitle || typeof newTitle !== 'string'){
             throw new Error('No title in argument string.')
         }
         this.title = newTitle;
     }
}