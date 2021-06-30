const assert = require('assert');
const toDoList = require('../modules/do-list.js');
const htmlBuilder = require('../to-do-server/html-builder.js');

describe('htmlBuilder class', ()=>{
    let toDo = new toDoList();
    //    it('should be truthy when called.', ()=> {
    //        assert.ok(htmlBuilder.build('test'));

    //    });
    let expectedTitle1 = '<div class = "task" id = "task0"><label for = "tasktitle">Title:</label><span id = "tasktitle">Test Task</span>';
    let expectedDesc1 = '<label for = "taskdescription">Description:</label><span id = "taskdescription">No description</span>';

    let expectedTitle2 = '<div class = "task" id = "task1"><label for = "tasktitle">Title:</label><span id = "tasktitle">2Test 2Task</span>';
    let expectedDesc2 = '<label for = "taskdescription">Description:</label><span id = "taskdescription">No description</span>';

    it('should return an html string from JSON argument.', ()=>{
        
        assert.strictEqual(htmlBuilder.build([{"title": "Test Task"}], ["title"]), expectedTitle1 + '</div>');
    });
    it('should return an html string from an empty to-do list.', ()=>{
            
        assert.strictEqual(htmlBuilder.build(toDo.getList()), '<div></div>');
    });
    it('should return an html string from a one item to-do list.', ()=>{
        toDo.newTask("Test Task");
        assert.equal(htmlBuilder.build(toDo.getList(), ["title", "description"]), expectedTitle1 + expectedDesc1 + '</div>');
    });
    it('should return an html string from a two item to-do list.', ()=>{
        toDo.newTask("2Test 2Task");
        assert.equal(htmlBuilder.build(toDo.getList(), ["title", "description"]), expectedTitle1 + expectedDesc1 + '</div>' + expectedTitle2 + expectedDesc2 + '</div>');
    });
    
});