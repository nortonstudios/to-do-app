const assert = require('assert');
const Task = require('../modules/do-item.js');

describe('Task class', () =>{
   
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
    })
});