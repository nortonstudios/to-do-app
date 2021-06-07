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
    describe('List of tasks with one named task', function(){
        // One name in list 
        let oneNameTestList = new toDoList();
        const expected = 'New Task';
        oneNameTestList.newTask(expected);
                
        // create and return named task based on index.
        it('should make and add named task.', function(){
            //arrange 
            //act
            const actual = oneNameTestList.getTask(0).getTitle();
            //assert
            assert.equal(actual, expected);
        });
        //Thows if getTask() tries to access out of array bounds
        it('should throw if out of bounds', function(){
            //arrange
            //act
            //assert
            assert.throws(function(){oneNameTestList.getTask(1)}, Error);
        });
        //Thows if getTask() if parameter is not a number
        it('should throw if not a number', function(){
            //arrange
            //act
            //assert
            assert.throws(function(){oneNameTestList.getTask('a')}, Error);
        });
        //Thows if getTask() has no parameter
        it('should throw if no parameter', function(){
            //arrange
            //act
            //assert
            assert.throws(function(){oneNameTestList.getTask()}, Error);
         
        });
        // Returns highest priority task based of a title
        it('should return task based on name', function(){
            //arrange, act
            const actual = oneNameTestList.getTaskByTitle(expected).getTitle();
            //assert
            assert.equal(actual, expected);
        });
        // Returns highest priority task based of a title
        it('should return error message task object if task not found', function(){
            //arrange, act
            const actual = oneNameTestList.getTaskByTitle('hotdog').getTitle();
            //assert
            assert.equal(actual, 'Task not found');
        });
        // Throw for bad title
        it('should throw if title is not a string or not passed', function(){
            //arrange, act
            //assert
            assert.throws(function(){oneNameTestList.getTaskByTitle()}, Error);
            assert.throws(function(){oneNameTestList.getTaskByTitle(4)}, Error);
        });
    });

    describe('list with several tasks.', function(){
        // Some names and some default titles in list 
        let testList = new toDoList();
        const expected = 'New Task';
        testList.newTask(expected);
        testList.newTask();
        testList.newTask(expected);
        testList.newTask('Mow lawn');

        //Return task by name from list with many tasks
        it('should return task based on name', function(){
            //arrange, act
            const actual = testList.getTaskByTitle(expected).getTitle().toLowerCase();
            //assert
            assert.notStrictEqual(actual, expected.toLocaleUpperCase());
            assert.notStrictEqual(actual, 'new task'.toLocaleUpperCase());
            assert.notStrictEqual(actual, 'untitled task'.toLowerCase());
        });

        // Returns highest priority task based on a title
        it('should return task based on name', function(){
            //arrange, act
            const actual = testList.getTaskByTitle(expected).getTitle();
            //assert
            assert.equal(actual, expected);
        });

        // Returns the entire array as list.
        it('should return the to-do list', function(){
            //arrange, act
            //assert
            assert.notStrictEqual(testList.getList(), testList);
            
        });
    });

    describe('deletions', function(){
        let testList = new toDoList();
        const expected = 'New Task';
        testList.newTask(expected);
        testList.newTask();
        testList.newTask(expected);
        testList.newTask('Mow lawn');

        //Delete a middle item
        it('should delete a middle item by index', function(){
           
            //arrange
            const expected = [];
            expected.push(testList.getTask(0));
            expected.push(testList.getTask(2));
            expected.push(testList.getTask(3));
            //act
            testList.remove(1);
            const actual = [];
            actual.push(testList.getTask(0));
            actual.push(testList.getTask(1));
            actual.push(testList.getTask(2));
            //assert
            assert.deepEqual(actual, expected);
            
        });

        // Delete last item
        it('should delete last item by index', function(){
            //arrange
            
            const expected = [];
            expected.push(testList.getTask(0));
            expected.push(testList.getTask(1));
            //act
            testList.remove(2);
            const actual = [];
            actual.push(testList.getTask(0));
            actual.push(testList.getTask(1));
            //assert
            assert.deepEqual(actual, expected);
        });

        it('should should be out of bounds and throw', function(){
            //arrange, act
            //assert
            assert.throws(function(){testList.getTask(2)}, Error);
        });

        // Delete first item
        it('should delete first item by index', function(){
        
            // //arrange
            const expected = [];
            expected.push(testList.getTask(1));
            //act
            testList.remove(0);
            const actual = testList.getList();
            //assert
            assert.deepEqual(actual, expected);
            
        });
        
        
    });

    



})