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

        //keydown event

        document.body.addEventListener('keydown',(event)=>{
            console.log(event.key);
            
            if(event.key==='r'){
                playgame('rock');
            }else if (event.key==='s'){
                playgame('scissor');
            }else if(event.key==='p'){
                playgame('paper');
            }
        })

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
        let isAutoplaying = false;
        let intervalId ;


        function autoplay(){
            let element= document.querySelector('.autoplay');
            if(!isAutoplaying){
            intervalId =  setInterval(() =>{  //changed to arrow function
                let move = pickcomputermove();//if a function is inside another func .. prefer arrow funcn 
                playgame(move);                 //or this is a personal choice
                
            },1000);
            isAutoplaying = true;
            element.innerText='stop play';
            }else{
                clearInterval(intervalId);
                isAutoplaying=false;
               element.innerText='Auto play';
            }

        }   
        document.querySelector('.js-rock-button').addEventListener('click',() => {
            playgame('rock');
        });
        document.querySelector('.js-paper-button').addEventListener('click',()=>{
            playgame('paper');
        });
        document.querySelector('.js-scissor-button').addEventListener('click',()=>{
            playgame('scissor');
        });


        document.body.addEventListener('keydown',(event)=>{
            if(event.key=='a'){
                autoplay();
                console.log(evenat);
            }else{
                return;
            }
        });
        document.body.addEventListener('keydown',(event)=>{
            if(event.key==' '){
            score.wins=0;
            score.loses=0;
            score.ties=0;
            localStorage.removeItem('score');
            reset();
            }else{
                return;
            }
        });
        let resetbutton= document.querySelector('.reset');

        resetbutton.addEventListener('click',()=>{
            let confirmation = '';
            let resetelement = document.querySelector('.resetconfirm');
            const html = `<div class ="messageforreset" >are you sure you want to reset the score?</div>
            <div class=yes-no>
            <button class="js-button-resetyes">Yes</button>
            <button class="js-button-resetno">no</button>
            </div>`
            resetelement.innerHTML= html ;
                        
                        const elementresetyes =document.querySelector('.js-button-resetyes');
                        const elementresetno =document.querySelector('.js-button-resetno');
                        elementresetyes.addEventListener('click',()=>{
                            score.wins=0;
                            score.loses=0;
                            score.ties=0;
                            localStorage.removeItem('score');
                            reset();
                            resetelement.innerHTML='';
                                 });
                        elementresetno.addEventListener('click',()=>{
                            resetelement.innerHTML='';
                            
                        })
        })
         document.querySelector('.scoreboard').innerText = `Wins :${score.wins} , loses: ${score.loses} , ties: ${score.ties}`;
