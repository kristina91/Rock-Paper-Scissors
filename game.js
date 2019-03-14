// Making comps choice for play
function compsChoice(){
    let comps = Math.floor(Math.random()*3);
    let stringC;

    if(comps === 0){
        // console.log(0);
        stringC = 'Scissors';
    }else if(comps === 1){
        // console.log(1);
        stringC = 'Paper';
    }else {
        // console.log(2);
        stringC = 'Rock';
    }

    return stringC;
}

function winningSituations(userC, compsC){
    
}

// Action for clicking on buttons rock, paper, scissors and reset
(function() {
    const buttons = document.querySelectorAll('.choice');
    let scoreU = 0;
    let scoreC = 0;

    buttons.forEach(button => {
        button.addEventListener('click', (prop) => {
            
            let stringU;
            let display = document.querySelector('.display');
            let result = document.querySelector('.result');

            let comp = compsChoice();


            if (prop.target.matches('.rock')) {
                // console.log('its a rock');
                
                stringU = 'Rock';
                display.innerHTML = stringU + " - " + comp;

                if(comp === "Rock"){
                    display.innerHTML += " DRAW!";
                }
                if(comp === "Paper"){
                    scoreC++;
                    result.innerHTML = "YOU " +scoreU+ ":" +scoreC+ " COMP";
                }
                if(comp === "Scissors") {
                    scoreU++;
                    result.innerHTML = "YOU " +scoreU+ ":" +scoreC+ " COMP";
                }

            } else if (prop.target.matches('.paper')) {
                // console.log('its a paper');
                stringU = 'Paper';
                display.innerHTML = stringU + " - " + comp;

                if(comp === "Rock"){
                    scoreU++;
                    result.innerHTML = "YOU " +scoreU+ ":" +scoreC+ " COMP";
                }
                if(comp === "Paper"){
                    display.innerHTML += " DRAW!";
                }
                if(comp === "Scissors") {
                    scoreC++;
                    result.innerHTML = "YOU " +scoreU+ ":" +scoreC+ " COMP";
                }

            } else if (prop.target.matches('.scissors')) {
                // console.log('its scissors');

                stringU = "Scissors";
                display.innerHTML = stringU + " - " + comp;

                if(comp === "Rock"){
                    scoreC++;
                    result.innerHTML = "YOU " +scoreU+ ":" +scoreC+ " COMP";
                }
                if(comp === "Paper"){
                    scoreU++;
                    result.innerHTML = "YOU " +scoreU+ ":" +scoreC+ " COMP";
                }
                if(comp === "Scissors"){
                    display.innerHTML += " DRAW!";
                }
            } else {
                // console.log('RESET ME???');
                display.innerHTML = "LET'S PLAY";
                scoreC = 0;
                scoreU = 0;
                result.innerHTML = "YOU " +scoreU+ ":" +scoreC+ " COMP";
            }

            function winner(user, comp) {
                user = scoreU;
                comp = scoreC;

                if(user > comp){
                    result.innerHTML = "Hooray, you won!";
                }else {
                    result.innerHTML = "Computer won, try again :D";
                }
            }

            const rock = document.querySelector('.rock');
            const paper = document.querySelector('.paper');
            const scissors = document.querySelector('.scissors');

            if(scoreC === 5 || scoreU === 5){
                rock.disabled = true;
                rock.style.border = '3px solid grey';
                rock.style.color = 'grey';

                paper.disabled = true;
                paper.style.border = '3px solid grey';
                paper.style.color = 'grey';

                scissors.disabled = true;
                scissors.style.border = '3px solid grey';
                scissors.style.color = 'grey';

                winner(scoreU, scoreC);
            }else{
                rock.disabled = false;
                paper.disabled = false;
                scissors.disabled = false;

                rock.style.border = '3px solid rgb(135, 156, 212)';
                paper.style.border = '3px solid rgb(135, 156, 212)';
                scissors.style.border = '3px solid rgb(135, 156, 212)';

                rock.style.color = 'rgb(135, 156, 212)';
                paper.style.color = 'rgb(135, 156, 212)';
                scissors.style.color = 'rgb(135, 156, 212)';
            }

        });
    });

})();
