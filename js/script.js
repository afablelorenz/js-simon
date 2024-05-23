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
    let count = 0;
    for(let i=0; i < 5; i++){
        let userNum = Number.parseInt(prompt('Inserire il '+(i+1)+'° numero: '),10);
        userArr.push(userNum);
    }
    for(let j=0; j<5; j++){
        if(userArr[j] === arrRandom[j]){
            count++;
            console.log(count);
        }
    }
    if(count == 5){
        alert('hai vinto!');
    }else{
        alert('hai perso!');
    }
    
}