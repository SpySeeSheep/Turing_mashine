
function getArrayOneSS($count) {
    let count_oness = new Array();
    for(let i = 0; i <= $count; i++)
    {
        count_oness[i] = 1;
    }
    return count_oness;
}

function isset(variable)
{
    if(typeof(variable) != 'undefined' && variable != null)
        return true;
    else
        return false;
}

function getRules(){
    
}

function getSettings(parameters){
    let str = '';
    let key = parameters.keys();
    for(let item of key)
    {

        str += '<button id="' + item + '">' + parameters.get(item) + '</button>\n';
	}
    return str;
}

