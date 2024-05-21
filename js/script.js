let arrRandom = [];
const squareEl = document.querySelector('section#square');
alert('Memorizza questi numeri');
arrRandom = generaRandom();

setTimeout(beforeTimeOut,1000);
setTimeout(afterTimeOut,3000);
setTimeout(compareRandom,4000);


console.log(arrRandom);


function beforeTimeOut(){
    for(let i=0; i<5; i++){
        const randomNum = document.createElement('article');
        let randomNumAdd = document.createTextNode(arrRandom[i]);
        randomNum.appendChild(randomNumAdd);
        randomNum.classList.add('randomNum');
        squareEl.appendChild(randomNum);
    }
}

function afterTimeOut(){
    for(let i=0; i<5; i++){
        const randomNum = document.getElementsByClassName('randomNum')[i];
        randomNum.classList.add('hide');
    }
}


function generaRandom(){
    let randomNumberArr = [];
    let randomNumber;
    for(let i=0; i < 5; i++){
        randomNumber = Math.floor(Math.random()*100) +1;
        for(let j=0; j < 5; j++){
            if(randomNumber === randomNumberArr[j]){
                randomNumber = Math.floor(Math.random()*100) +1;
            }
        }
        randomNumberArr.push(randomNumber);
    }
    return randomNumberArr;
}

function compareRandom(){
    let userArr = [];
    for(let i=0; i < 5; i++){
        let userNum = Number.parseInt(prompt('Inserire il '+(i+1)+'° numero: '),10);
        userArr.push(userNum);
    }
    if(userArr[0] === arrRandom[0] && userArr[1] === arrRandom[1] && userArr[2] === arrRandom[2] && userArr[3] === arrRandom[3] && userArr[4] === arrRandom[4]){
        alert('Hai vinto!');
    }else{
        alert('Hai perso!');
    }
}