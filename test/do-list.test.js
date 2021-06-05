const assert = require('assert');
const toDoList = require('../modules/do-list.js');

describe('List class', ()=>{
    //set up unit under test.
    let toDo = new toDoList();
    
    // Tests that the constructor builds a to-do list object.
    describe('Builds ok', ()=>{
        it('should have instanced a class object successfully', ()=>{
            //arrange
            
            //act
            //assert
            assert.ok(toDo);
        });
        // it('had correct id: 5.', () => {
        //     //arrange
        //     let expected = 5;
        //     const toDo = new toDoList(5);

        //     //act
        //     let actual = toDo.id;

        //     //assert
        //     assert.deepEqual(actual, expected);
        // });
    });

    // New task with no parameters.
    // Tests that newItem() builds a task and that all the defaults are intact.
    // Defaults tested at time of implementation: title, description,
    // priority.  
    describe('newItem: parameterless factory method,', ()=>{
        //set up unit under test.
        const newItem = toDo.newItem();
        it('should make a new list object', ()=>{
            //arrange
            const id = 5;
            //act         
            //assert
            assert.ok(newItem);
        });
        it('should have default values.', function(){
            //arrange
            const expected = ['Untitled Task', 'No description', 500];
            // act
            const actual = [newItem.getTitle(), newItem.getDesc(), newItem.getPriority()];
            //assert
            assert.deepEqual(actual,expected);
        
        });
        it('should have a start time', function(){
            //arrange, act
            //assert
            assert.ok(newItem.getStart());
        });
    });

    // The list that stores all of the tasks and associated methods. 
    // Default list sort is by creation time.
    // Tests: adds new task, removes a task, creates a list sorted by priority.
    describe('List of tasks', function(){
        
        // Tests if task array builds.
        it('Has Tasks array', function(){
            //arrange, act
            //assert
            assert.ok(toDo.tasks);
        });
        // Number of tasks
        it('should return the number of tasks on the to-do list.', function(){
            //arrange
            const expected = 0;
            //act
            const actual = toDo.getNumber();
            //assert
            assert.strictEqual(actual, expected);
        });
        
        // NewTask creates a new task and pushes it onto the array. 
        it('should make and add a new task.', function(){
            //arrange 
            const expected = 1;
            let lengthTestList = new toDoList();
            //act
            lengthTestList.newTask();
            const actual = lengthTestList.getNumber();
            //assert
            assert.strictEqual(actual, expected);

        });
    });


})