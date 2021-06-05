const assert = require('assert');
const Task = require('../modules/do-item.js');

describe('Task class', () =>{
   
    //Implementation tests.
    describe('Item in to-do list', ()=>{
    //Set up the unit under test.
    let task = new Task();
        it('should build an instance', ()=>{
            //arrange
            //act
            //assert
            assert.ok(task);
        });
        
        it('should have parameters: title.', ()=>{           
            assert.ok(task.title);
        });
        it('should have parameters: description.', ()=>{
            assert.ok(task.description);
        });
        it('should have parameters: start.', ()=>{
            assert.ok(task.startTime);
        });
        it('should have parameters: due.', ()=>{
            assert.ok(task.due);
        });
        it('should have parameters: duration.', ()=>{
            assert.ok(task.plannedDuration);
        });
        it('should have parameters: priority.', ()=>{
            assert.ok(task.priority);
        });
    });

    // Title of to-do list item functionality tests;
    // Default title, set new title - with empty, bad, and good 
    // arguments.

    describe('Title', ()=>{
        //Set up local unit under test for Title
        let titleTask = new Task();
        it('should return "Untitiled Task" if no title passed to constructor', () =>{
            //arrange 
            const expected = 'Untitled Task';
            //act
            const actual = titleTask.title;
            //assert
            assert.equal(actual, expected);
        });
        it('should return title from getTtile()', ()=>{
            //arrange 
            const expected = 'Untitled Task';
            //act
            const actual = titleTask.getTitle();
            //assert
            assert.equal(actual, expected);
        })
        it('should return "Test1" as passed to constructor', () =>{
            //arrange 
            let expected = 'Test1';
            //act
            let titleTask = new Task(expected);
            const actual = titleTask.title;
            //assert
            assert.equal(actual, expected);
        });
        it('should change title by calling changeTitle()',()=>{
            //arrange
            let expected = 'New Title';
            //act
            titleTask.changeTitle(expected);
            const actual = titleTask.title;
            //assert
            assert.equal(actual, expected);
        });
        it('should error from an empty string.', ()=>{
            //arrange
            let expected = 'New Title';
            //act
            //assert
            assert.throws(function() {titleTask.changeTitle()},Error);

        })

    });

    // Description of to-do list item functionality tests:
    // Default description, set new description - with empty, bad, 
    // and good arguments.
    describe('Description', () =>{
        //Set up local unit under test for Title
        let dTask = new Task();
        it('should have default.', ()=>{
            //arrange
            const expected = 'No description';
            const actual = dTask.getDesc();
            //assert
            assert.equal(actual, expected);
        });
        it('should error on empty newDesc()', ()=>{
            //arrange       
            //assert
            assert.throws(function(){dTask.newDesc();}, Error);
        });
        it('should error on int argument in newDesc()', ()=>{
            //arrange       
            //assert
            assert.throws(function(){dTask.newDesc(4);}, Error);
        });
        it('should set and return new description', ()=>{
            //arrange
            const expected = 'New description';
            dTask.newDesc(expected);
            const actual = dTask.getDesc();
            //assert
            assert.equal(actual, expected);
        });
    });

    // Start time. When the task was created. 
    // Tests: correct initialization, correct get.
    describe('startTime', ()=>{
        // Set up unit under test.
        let startTask = new Task();
        it('initializes with a time', ()=>{
            //arrange, act
            //assert
            assert.ok(startTask.getStart());
        });
    });

    // Priority of task.
    // Tests: get priority - with and without being set in construcor,
    // set priority.
    describe('priority', ()=>{
        //set up unit under test.
        let pTask = new Task();

        it('should return default priority, 500.', ()=>{
            //arrange, act
            //asset
            assert.ok(pTask.getPriority());
        });
        it('should return new priority value.', ()=>{
            //arrange
            const expected = 345;
            //act
            pTask.setPriority(expected);
            const actual = pTask.getPriority();
            //assert
            assert.strictEqual(actual, expected) ;
        });
        it('should throw on bad priority value on an string.', ()=>{
            //arrange
            //act
            //assert
            assert.throws(function(){pTask.setPriority('h')}, Error);
        });     
        it('should throw on bad priority value if empty.', ()=>{
            //arrange
            //act    
            //assert
            assert.throws(function(){pTask.setPriority('')}, Error);
        });   
        it('should throw on bad priority value if negative.', ()=>{
            //arrange          
            //act          
            //assert
            assert.throws(function(){pTask.setPriority(-500)}, Error);
        });   
        it('should convert a decimal to an int.', ()=>{
            //arrange
            const expected = 201;
            const testValue = 200.2;
            //act
            pTask.setPriority(testValue);
            const actual = pTask.getPriority();
            //assert
            assert.strictEqual(actual, expected);
        });   
    });
});