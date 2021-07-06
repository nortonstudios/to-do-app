

class htmlBuilder{

    // Takes JSON array and list of keys and returns 
    // selected key pairs surrounded by <div>s.
    static build(input, desiredKeys) {

        let output = '';

        if(input.length > 0 && desiredKeys){

            let index = 0;
            input.forEach(element => {

                // Builds container for each list item. 
                // Calls buildItem() for the elements within that list item.
                output += `<div class = "task" id = "task${index}">` + buildItem(element, desiredKeys) +  `<button type="button" id="${index}"  onclick="deleteTask(this.id)">Task Complete</button></div>\n`; 
                index ++; 
                
            });
            return output;
        }
        return '<div>' + output + '</div>';
    }
}

module.exports = htmlBuilder;

// Packeges each desired keys from a JSON object into span tags.
function buildItem(input, desiredKeys){
    let output = '';
    desiredKeys.forEach(key =>{

        // Formatting for priority key. Translate from number to 
        // low/med/high.
        if(key === 'priority'){
            // Get string value
            const priorityLevel = getPriorityString(input[key]);

            // Build entry with string.
            output += `<label for = "task${key}">${key.replace(/^./, key[0].toUpperCase())}:</label><span id = "task${key}">${priorityLevel}</span>`;
            
        }else{
            // Build HTML entry.
            output += `<label for = "task${key}">${key.replace(/^./, key[0].toUpperCase())}:</label><span id = "task${key}">${input[key]}</span>`;
        }
    });
    return output;
}

// Translate numerical priority to low/med/high string.
// Expects number.
// Returns string.
function getPriorityString(priority){
    const priorityNumber = priority;
    if (priorityNumber === 500){
        return 'Medium';
    } 
    if (priorityNumber < 500) {
        return 'Low';
    } 
    return 'High';    
}
