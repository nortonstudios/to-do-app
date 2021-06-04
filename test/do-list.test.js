const assert = require('assert');
const toDoList = require('../modules/do-list.js');

describe('List class', ()=>{
    //set up unit under test.
    let toDo = new toDoList();
    
    describe('builds', ()=>{
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

    describe('Actions', ()=>{
        it('should make a new list object', ()=>{
            //arrange
            const id = 5;
            //act
            const newItem = toDo.newItem();
            //assert
            assert.ok(newItem);
        })
    });
});