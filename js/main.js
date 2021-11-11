
//ref

const title = document.getElementById('title');
const display = document.getElementById('display');

//genera 5 num rand

const randNum = getRandomList(5);

console.log(randNum);

display.innerHTML = randNum;

//30 secondi di attesa

setTimeout(( ) => {

    //rimuovere numeri dallo schermo

    display.innerHTML = '';
    title.innerHTML = 'Insersci 5 numeria a tua scelta';

    setTimeout ( ()  => { 

    //ottenere 5 numeri dall' utente

    const userNum = getUserNum(randNum.length);
    console.log(player);

    //check numeri

    const player = userNum.filter(userNum => randNum.includes(userNum));
    console.log(player);

    //risultati

    title.innerHTML = `Numeri indovinati: ${player.length}. Lista da indovinare ${randNum}`;
    display.innerHTML = player;
    },1000);

},30000);



//generare 5 numeri random

function getRandomList (itemNum){
    const randNum = [];

    while(randNum.length < itemNum) {

        const rand = getRandomNum(0,100);

        if(!randNum.includes(rand)) {
            randNum.push(rand);
        }

    }

    return randNum;
}


//genera random

function getRandomNum(min, max){

return  Math.floor(Math.random() * (max - min + 1)) + min;

}


//chiedere numeri

function getUserNum(time) {
    const userNum = [];

    while (userNum.length < time){
        const askNum = parseInt(prompt(`Inserisci il numero ${userNum.length + 1}di ${time}`) );

        if (!userNum.includes(askNum)){
            userNum.push(askNum);
        }
    }
    return userNum;
}