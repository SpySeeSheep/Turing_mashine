/*
  ПРАВИЛА:
  действий: 10
  символов: 4

  Описание: правил 10, из этого я использовал кострукцию из 3-х символов:
  1 символ - символ который остается после выполнения действия
  2 символ - новое состояние мт
  3 символ - английская буква действия

  спец. слово - empty служит обозначением пустого действия для текущего состояния. нужен
  для того чтобы не путался порядок правил в массиве (для удобства работы).
  порядок символов в правиле: 1 l(?) = 0
  действия: r l s(завершающий символ)
*/ 

var currentPosition = 0;
var rules = new Array();
for(let i = 0; i < 10; ++i)
{
  rules.push(new Array());
}
rules[0].push('10l');
rules[0].push('=1r');
rules[0].push('=4l');
rules[0].push('empty');

rules[1].push('11r');
rules[1].push('l2l');
rules[1].push('empty');
rules[1].push('empty');

rules[2].push('l3l');
rules[2].push('empty');
rules[2].push('empty');
rules[2].push('empty');

rules[3].push('10l');
rules[3].push('empty');
rules[3].push('l7l');
rules[3].push('empty');

rules[4].push('06l');
rules[4].push('05r');
rules[4].push('empty');
rules[4].push('15r');

rules[5].push('15r');
rules[5].push('empty');
rules[5].push('=1r');
rules[5].push('05r');

rules[6].push('06l');
rules[6].push('15r');
rules[6].push('empty');
rules[6].push('15r');

rules[7].push('07l');
rules[7].push('18l');
rules[7].push('empty');
rules[7].push('18l');

rules[8].push('18l');
rules[8].push('l9r');
rules[8].push('empty');
rules[8].push('08l');

rules[9].push('19s');
rules[9].push('empty');
rules[9].push('empty');
rules[9].push('empty');

function getArrayOneSS($count) {
    let count_oness = new Array();
    for(let i = 0; i <= $count; i++)
    {
        count_oness[i] = 1;
    }
    return count_oness;
}

function getRules(){
  let str = '';
  
  return str;
}

function getSettings(parameters){
    let str = '';
    const key = parameters.keys();
    for(let item of key)
    {
        // console.log(item);
        str += '<button id="' + item + '">' + parameters.get(item) + '</button>\n';
	}
    return str;
}
