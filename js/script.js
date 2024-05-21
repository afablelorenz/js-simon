let arrRandom = [];

arrRandom = generaRandom();
console.log(arrRandom);

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