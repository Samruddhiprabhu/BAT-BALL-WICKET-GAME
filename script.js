      let computerValue;
      let result;
      let computerScore=userScore=0;
      

      function computerChoice(){
        let value=Math.random()*6;
        if(value>=0 && value<=2){
          computerValue='BAT';
           document.querySelector("#computer-choice").innerText=`Computer choosed ${computerValue}`;
        }else if(value>2 && value<=4){
         computerValue='BALL';
          document.querySelector("#computer-choice").innerText=`Computer choosed ${computerValue}`;
       }else if(value>4 && value<=6){
        computerValue='WICKET';
        document.querySelector("#computer-choice").innerText=`Computer choosed ${computerValue}`;
     }
      }

      function showResult(userValue,computerValue){
        if(computerValue=='BAT'&& userValue=='BAT' || computerValue=='BALL'&& userValue=='BALL' ||computerValue=='WICKET'&& userValue=='WICKET' ){
          result='TIE!!';
        document.querySelector('#result').innerText=`The Result :${result} `;
      }else if(computerValue=='BAT' && userValue=='BALL' || computerValue=='BALL'&& userValue=='WICKET' || computerValue=='WICKET' && userValue=='BAT'){
        result='COMPUTER WON!!';
        document.querySelector('#result').innerText=`The Result : ${result}`;
      }else if(userValue=='BAT' && computerValue=='BALL' || userValue=='BALL'&& computerValue=='WICKET' ||userValue=='WICKET' && computerValue=='BAT'){
        result='YOU WON!!';
        document.querySelector('#result').innerText=`The Result : ${result}`;
      }
    }

    function scoreBoard(){
          if(result=='TIE!!'){
            document.querySelector('#score').innerText=`Computer Score: ${computerScore}  and  User Score: ${userScore}`;
          }else if(result=='COMPUTER WON!!'){
            computerScore++;
            document.querySelector('#score').innerText=`Computer Score: ${computerScore}  and  User Score: ${userScore}`;
          }else if(result=='YOU WON!!'){
            userScore++;
            document.querySelector('#score').innerText=`Computer Score: ${computerScore}  and  User Score: ${userScore}`;
          }
          
    }

    function reset(){
      computerScore='0';
      userScore='0';
      document.querySelector('#result').innerText=``;
      document.querySelector("#computer-choice").innerText=``;
      document.querySelector('#score').innerText=``;
    }

  