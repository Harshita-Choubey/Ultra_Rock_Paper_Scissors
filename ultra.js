const rules = {
    'Rock': ['Scissors', 'Fire', 'Snake', 'Human', 'Tree', 'Wolf', 'Sponge'],
    'Scissors': ['Snake', 'Human', 'Tree', 'Wolf', 'Sponge', 'Paper', 'Air'],
    'Fire': ['Scissors', 'Paper', 'Snake', 'Human', 'Tree', 'Wolf', 'Sponge'],
    'Snake': ['Water', 'Tree', 'Wolf', 'Sponge', 'Air', 'Paper', 'Devil'],
    'Human': ['Wolf', 'Sponge', 'Paper', 'Air', 'Dragon', 'Gun', 'Rock'],
    'Tree': ['Sponge', 'Paper', 'Air', 'Dragon', 'Gun', 'Rock', 'Lightning'],
    'Wolf': ['Paper', 'Air', 'Dragon', 'Gun', 'Rock', 'Lightning', 'Devil'],
    'Sponge': ['Air', 'Dragon', 'Gun', 'Rock', 'Lightning', 'Devil', 'Water'],
    'Paper': ['Dragon', 'Gun', 'Rock', 'Lightning', 'Devil', 'Water', 'Fire'],
    'Air': ['Gun', 'Rock', 'Lightning', 'Devil', 'Water', 'Fire', 'Dragon'],
    'Water': ['Rock', 'Lightning', 'Devil', 'Water', 'Fire', 'Dragon', 'Gun'],
    'Dragon': ['Lightning', 'Devil', 'Water', 'Fire', 'Dragon', 'Gun', 'Rock'],
    'Devil': ['Water', 'Fire', 'Dragon', 'Gun', 'Rock', 'Lightning', 'Scissors'],
    'Lightning': ['Fire', 'Dragon', 'Gun', 'Rock', 'Lightning', 'Devil', 'Scissors'],
    'Gun': ['Dragon', 'Gun', 'Rock', 'Lightning', 'Devil', 'Scissors', 'Fire']
};
let scores = 0
let result
const gestures = Object.keys(rules);

function res(player,computer,result){
    document.getElementById('playerchoice').innerHTML = 'You chose :'+player
        document.getElementById('computerchoice').innerHTML = 'Computer chose :'+computer
        document.getElementById('result').innerHTML = result
        document.getElementById('scores').innerHTML = scores
}

function check(player){
    let computer = gestures[Math.floor(Math.random()*gestures.length)]
    if(player===computer){
        result = 'Tie'
        scores = scores
        
    }
    else if(rules[player].includes(computer)){
        result = 'You Won'
        scores += 1
    }
    else{
        result = 'You lost'
        scores += -1
    }
    res(player,computer,result)
}
