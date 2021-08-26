let user_score = 0
let comp_score = 0
const userscore_span = document.getElementById("user-score")
const compscore_span = document.getElementById("comp-score")
const scoreboard_div = document.querySelector(".scoreboard")
const result_div = document.querySelector(".result")
const rock_div = document.getElementById("r")
const paper_div = document.getElementById("p")
const scissors_div = document.getElementById("s")

function compChoice(){
    const choices = ['r','p','s']
    const rand = Math.floor(Math.random()*3)
    return choices[rand]
}

function convertor(letter){
    if(letter==="r") return "Rock";
    if(letter==="p") return "Paper";
    return "Scissors"
}

function win(user, comp){
    const smalluser = "(user)".fontsize(3)
    const smallcomp = "(comp)".fontsize(3)
    user_score++
    userscore_span.innerHTML = user_score
    compscore_span.innerHTML = comp_score
    // result_div.innerHTML = convertor(user) + " beats " + convertor(comp) + " YOU WIN!!!" equivalent code
    result_div.innerHTML = `${convertor(user)}${smalluser}   beats   ${convertor(comp)}${smallcomp}   YOU WIN!!!`
    document.getElementById(user).classList.add('green-glow')
    setTimeout(()=> document.getElementById(user).classList.remove('green-glow'), 300)
}

function lose(user, comp){
    const smalluser = "(user)".fontsize(3)
    const smallcomp = "(comp)".fontsize(3)
    comp_score++
    userscore_span.innerHTML = user_score
    compscore_span.innerHTML = comp_score
    // result_div.innerHTML = convertor(user) + " beats " + convertor(comp) + " YOU WIN!!!" equivalent code
    result_div.innerHTML = `${convertor(user)}${smalluser}   LOSES TO   ${convertor(comp)}${smallcomp}   YOU LOST!!!`
    document.getElementById(user).classList.add('red-glow')
    setTimeout(()=>document.getElementById(user).classList.remove('red-glow'), 300)
}

function draw(user, comp){
    const smalluser = "(user)".fontsize(3)
    const smallcomp = "(comp)".fontsize(3)
    // result_div.innerHTML = convertor(user) + " beats " + convertor(comp) + " YOU WIN!!!" equivalent code
    result_div.innerHTML = `${convertor(user)}${smalluser}   EQUALS   ${convertor(comp)}${smallcomp}   GAME DRAW!!!`
    document.getElementById(user).classList.add('grey-glow')
    setTimeout(()=> document.getElementById(user).classList.remove('grey-glow'), 300)
   
}

function game(userChoice){
    const computerChoice = compChoice()
    switch(userChoice+computerChoice){
        case "rs":
        case "pr":
        case "sp":
            win(userChoice,computerChoice);
            break;
        case "sr":    
        case "rp":    
        case "ps":
            lose(userChoice,computerChoice);
            break;    
        case "ss":    
        case "rr":    
        case "pp":
            draw(userChoice,computerChoice);
            break;    
    }

}

function main(){
    rock_div.addEventListener("click", ()=> game("r"))
    
    paper_div.addEventListener("click", ()=>game("p"))
    
    scissors_div.addEventListener("click", ()=>game("s"))
}

main();