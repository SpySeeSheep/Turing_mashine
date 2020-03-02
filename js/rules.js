function getArrayOneSS($count){
    let count_oness = new Array();
    for(let i = 0; i <= $count; i++)
    {
        count_oness[i] = 1;
    }
    return count_oness;
}
function getRules(){

}

document.getElementById("click").onclick = function eventTuring(){
    let count = getArrayOneSS(document.getElementById("in_count").value);
    
}