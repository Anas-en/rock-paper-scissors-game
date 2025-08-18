const score = JSON.parse(localStorage.getItem('score')) || {
            wins: 0,
            loses: 0,
            ties: 0
        }

        /* if(score==0){
              score={
                   wins:0,
                   loses:0,
                   ties:0
              };
         }*/

        // localStorage.setItem('score',JSON.stringify(score));

        function pickcomputermove() {

            const randomNumber = Math.random();

            let computerMove = '';


            if (randomNumber > 0 && randomNumber <= 1 / 3) {
                computerMove = 'rock';

            } else if (randomNumber <= 2 / 3 && randomNumber > 1 / 3) {
                computerMove = 'paper';

            } else if (randomNumber > 2 / 3 && randomNumber <= 1) {
                computerMove = 'scissors';
            }

            return computerMove;

        }


        function playgame(playermove) {
            const compMove = pickcomputermove();
            let result = '';

            if (compMove === playermove) {
                result = 'tie';


            } else if (
                (playermove === 'rock' && compMove === 'scissors') ||
                (playermove === 'paper' && compMove === 'rock') ||
                (playermove === 'scissors' && compMove === 'paper')
            ) {
                result = 'you wins!!';
                // document.querySelector('.winorlose').innerText='You win';

            } else {
                result = 'you lose !!'
                // document.querySelector('.winorlose').innerText='You lose';

            }
            

            if (result == 'you wins!!') {
                score.wins = score.wins + 1;
            } else if (result == 'you lose !!') {
                score.loses++;
                //score.loses+=1
            } else if (result == 'tie') {
                score.ties += 1;
            }
            localStorage.setItem('score', JSON.stringify(score));

            document.querySelector('.winorlose').innerText = result;
            document.querySelector('.currentgame').innerText = `You ${playermove} - ${compMove} Computer`;
            document.querySelector('.scoreboard').innerText = `Wins :${score.wins} , loses: ${score.loses} , ties: ${score.ties}`;
            let element = document.querySelector('.currentgame')
            function game(){
                if(playermove==='rock'){
                        element.innerHTML=`You `
                }
            }
            document.querySelector('.currentgame').innerHTML=`You <img src="${playermove}-emoji.png" width="50px" alt=""> <img src="${compMove}-emoji.png" width="50px">Computer`
            console.log(playermove);
            console.log(compMove);
            /*alert(`You picked ${playermove}. Computer picked ${compMove}. ${result} 
wins: ${score.wins} loses: ${score.loses} ties: ${score.ties}`);*/
        }

        function reset() {
            document.querySelector('.winorlose').innerText = 'make your choice';
            document.querySelector('.currentgame').innerText = 'make your choice';
            document.querySelector('.scoreboard').innerText = `Wins :${score.wins} , loses: ${score.loses} , ties: ${score.ties}`;
        }
         document.querySelector('.scoreboard').innerText = `Wins :${score.wins} , loses: ${score.loses} , ties: ${score.ties}`;
