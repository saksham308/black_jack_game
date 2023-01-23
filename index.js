let isAlive=false
player={name:'saksham',chips:'200'}
let sum=0
let hasBlackJack=false
let message=''
let cards=[]
let messageEl=document.getElementById('message-el')
let sumEl=document.getElementById('sum-el')
let cardsEl=document.getElementById('cards-el')
playerEl=document.getElementById('player-el')
function startGame(){
    playerEl.textContent=player.name+' $ '+player.chips
    let firstcard=getRandomCard()
    let secondcard=getRandomCard()
    isAlive=true
    cards=[firstcard,secondcard]
    sum=firstcard+secondcard
    renderGame()
}
function renderGame(){
    cardsEl.textContent= "Cards: " 
    for(let i=0; i<cards.length;i++){
        cardsEl.textContent+= cards[i]+' '
    }
    sumEl.textContent='Sum: '+ sum
    if (sum<=20){
        message='Do you want to draw a card?'
    }else if(sum===21){
        message="Congratulations!"
        hasBlackJack=true
    }else{
        message='You are out of the game!'
        isAlive=false
    }
    messageEl.textContent=message
}
function getRandomCard(){
    let number=Math.floor(Math.random()*13)+1;
    if(number>10){
        return 10
    }
    else if(number===1){return 11}
    else{
        return number
    }
}

function newcard(){
    if(isAlive===true && hasBlackJack===false){
        let card=getRandomCard()
        sum+=card
        cards.push(card)
        renderGame()}
    
}

