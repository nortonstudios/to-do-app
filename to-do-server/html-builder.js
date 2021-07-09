

class htmlBuilder{

    // Takes JSON array and list of keys and returns formatted
    // selected key pairs.
    static build(input, desiredKeys) {

        // Table format. 
        return buildTableList(input, desiredKeys);
        
    }
}

module.exports = htmlBuilder;

// ------Table stuff ------- 

// Takes JSON array and list of keys and returns 
// table of selected key pairs.
function buildTableList(input, desiredKeys){
    let output = '';

    if(input.length > 0 && desiredKeys){

        let index = 0;
        input.forEach(element => {

            // Builds container for each list item. 
            output += buildTableRow(index, element, desiredKeys); 
            index ++; 
            
        });
        return '<table class="table table-boardered"><tbody><tr><th>Task</th><th>Description</th><th>Priority</th><th>Complete</th></tbody></tr>' + output + '</table>';
    }
    return;
}

// Packages desired key/values pairs from a JSON object into a table row.
function buildTableRow(index, element, desiredKeys){
    return `<tr>${getTableItem(element, desiredKeys)}${getCompletedButton(index)}</tr>\n`;; 
}

// Packeges each desired keys from a JSON object and sends it to be built into 
// a table entry.
function getTableItem(input, desiredKeys){
    let output = '';
    desiredKeys.forEach(key =>{

        // Formatting for priority key. Translate from number to 
        // low/med/high.
        if(key === 'priority'){
            // Get string value
            const priorityLevel = getPriorityString(input[key]);

            // Build entry with priority string, in stead of key/value pair.
            output += buildTableEntry(key, priorityLevel);

        }else{
            // Build HTML entry.
            output += buildTableEntry(key, input[key]);
        }
    });
    return output;
}

// Builds a single table item entry from a key/value pair. 
function buildTableEntry(key, value){
    return `<td>${value}</td>\n`;
}

// Builds a task complete button with the list index of the completed task.
function getCompletedButton(index){
    return `<td><button type="button" id="${index}"  onclick="deleteTask(this.id)">Task Complete</button></td>`;
}

// Translate numerical priority to low/med/high string.
// Expects number.
// Returns string.
function getPriorityString(priority){
    const priorityNumber = priority;
    if (priorityNumber === 500){
        return 'Normal';
    } 
    if (priorityNumber < 500) {
        return 'Low';
    } 
    return 'High';    
}