const sum = document.getElementById("sum")
const btn1 = document.getElementById("btn1")
const btn2 = document.getElementById("btn2")
const btn3 = document.getElementById("btn3")
const score1 = document.getElementById("score-1")
const score2 = document.getElementById("score-2");
const score3 = document.getElementById("score-3");

var iPhone = 6;
var Watch = 15;
var Rolex = 30;


var big_figure = 1000000;

var num1 = 400;
var num2 = 200;
var num3 = 30000;

var count = 0;
function Summer1() {
    count++;
    
    if (count == 8) {
        btn1.disabled = true
    } else if (count <= 7) {
        score1.innerText = `Осталось: ${iPhone--}`;
        sum.innerText = `${big_figure -= num1}$`;
    }
}

var click2 = 0;
function Summer2(){
    click2++;
    if (click2 == 17) {
        btn2.disabled = true
    } else if (click2 <= 17) {
        score2.innerText = `Осталось: ${Watch--}`;
        sum.innerText = `${big_figure -= num2}$`;
    }
}

//переключение тем
function img(){
    document.body.style.background = 'url("img/Космос.jpg") fixed';
}

function img2(){
    document.body.style.background = 'url("img/131.jpg") fixed';
}


var click3 = 0;
function Summer3(){
    click3++;
    if(click3 == 32){
        btn3.disabled = true
    } else if(click3 <= 31){
        sum.innerText = `${big_figure -= num3}$`
        score3.innerText = `Осталось:${Rolex--}`
        
    }
}