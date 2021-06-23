

class htmlBuilder{

    // Takes JSON array and list of keys and returns 
    // selected key pairs surrounded by <div>s.
    static build(input, desiredKeys) {

        let output = '';

        if(input.length > 0 || desiredKeys){

            let index = 0;
            input.forEach(element => {

                output += `<div class = "task" id = "task${index}">` + buildItem(element, desiredKeys) + '</div>';
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
        output += `<label for = "task${key}">${key.replace(/^./, key[0].toUpperCase())}:</label><span id = "task${key}">${input[key]}</span>`;
    });
    return output;
}

// <div> surrounds every field in JSON. 
// TDD but no tests remaining. Need to figure out the start time issue. 
function buildAll(input, desiredKeys) {
    //return '<div>' + JSON.stringify(input) + '</div>';
    let output = '';

    if(input || desiredKeys){
        input.forEach(element => {
            Object.entries(element).forEach(([key, value]) =>{
            output += `<div>${key}:${value}</div>`;
            });
        });
        return output;
    }
    return output;
}
