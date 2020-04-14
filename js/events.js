var count = 0;
var configuration = new Array();
var currentState = '11l';
function update(){
    currentState = '11l';
    let str = '<table border="1"><tr>';
    let symbol = 'λ';
    for (let i = 0; i < count.length * 4 + 1; i++) {
        if(i >= Math.round((count.length * 2 + 1)*7/8) &&
         i < Math.round((count.length * 2 + 1)*7/8) + count.length){
            symbol='1';
        }
        else
            symbol='λ';
        str += "<td " + 'id="' + i + '"' + '>' + 
        '<input type="text" class="cells" id="val'+i+'" value="'+symbol+'"></input>'
         + '</td>';
    }
    str += "</tr></table>";
    return str;
}

$('#click').click(function() {
    const in_count = $('#in_count').val();
    //  console.log(in_count);
    count = getArrayOneSS(in_count);

    $('.table_good').html(update());
    let c = Math.round((count.length * 2 + 1)*7/8);
    $('#val'+c).css('background-color', 'red');
    currentPosition = c;
    
    $('.settings').css('visibility', 'visible');
    $('.rules').html(getRules());
});

$('#updateMT').click(function() {
    // console.log('updateMT');
    $('.table_good').html(update());
    let c = Math.round((count.length * 2 + 1)*7/8);
    $('#val'+c).css('background-color', 'red');
    currentPosition = c;
});

function step(symbol)
{
  console.log(currentState[2] == 'l');
  $('#val'+currentPosition).val(rules[Number(currentState[1])][symbol][0]);
  $('#val'+currentPosition).css('background-color','white');
  currentState = rules[Number(currentState[1])][symbol];
  currentPosition = (currentState[2] == 'l')?
    currentPosition - 1: currentPosition + 1;
  $('#val'+currentPosition).css('background-color', 'red');
  return currentState;  
}

function next(currentState)
{
  
  let symbol = 0;
  switch($('#val'+currentPosition).val()){
    case '1':
        symbol = 0;
        break;
    case 'λ':
        symbol = 1;
        break;
    case 'l':
        symbol = 1;
        break;
    case '=':
        symbol = 2;
        break;
    case '0':
        symbol = 3;
        break;
  }
  console.log(currentState);
  if(rules[Number(currentState[1])][symbol][2] == 's') return 'end';
  currentState = step(symbol);
  return currentState;
}

function end()
{
  console.log('end');
  $('#step').css('visibility', 'hidden');
  $('#go').css('visibility', 'hidden');
  let currPos = currentPosition;
  while($('#val'+currPos).val() != 'l'){
    $('#val'+currPos).css('background-color', 'rgb(245, 73, 99)');
    currPos++;
  }
  alert('Итоговый результат с позиции: '+ currentPosition + 1);

}

$('#step').click(function(){
    // console.log('step');
    currentState = next(currentState);
    if(currentState == 'end')
        end();
});