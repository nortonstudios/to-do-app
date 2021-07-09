
class htmlDivBuilder{

    // Takes JSON array and list of keys and returns formatted
    // selected key pairs.
    static build(input, desiredKeys) {

        // Div format. 
        return buildTableList(input, desiredKeys);
        
    }
}

module.exports = htmlDivBuilder;

// Takes JSON array and list of keys and returns 
// selected key pairs surrounded by <div>s.
function buildDivList(input, desiredKeys){
    let output = '';

    if(input.length > 0 && desiredKeys){

        let index = 0;
        input.forEach(element => {

            // Builds container for each list item. 
            output += buildItemContainer(index, element, desiredKeys); 
            index ++; 
            
        });
        return output;
    }
    return '<div>' + output + '</div>';
}

// Builds container for each list item. 
// Calls buildItem() for the elements within that list item.
function buildItemContainer(index, element, desiredKeys){
    return `<div class = "task" id = "task${index}">` + buildDivItem(element, desiredKeys) +  `<button type="button" id="${index}"  onclick="deleteTask(this.id)">Task Complete</button></div>\n`;
}

// Packeges each desired keys from a JSON object into span tags.
function buildDivItem(input, desiredKeys){
    let output = '';
    desiredKeys.forEach(key =>{

        // Formatting for priority key. Translate from number to 
        // low/med/high.
        if(key === 'priority'){
            // Get string value
            const priorityLevel = getPriorityString(input[key]);

            // Build entry with priority string, in stead of key/value pair.
            output += buildEntry(key, priorityLevel);

        }else{
            // Build HTML entry.
            output += buildEntry(key, input[key]);
        }
    });
    return output;
}

// Builds html for a single key/value pair.
function buildEntry(key, value){
    return `<label for = "task${key}">${key.replace(/^./, key[0].toUpperCase())}:</label><span id = "task${key}">${value}</span>`;
}
