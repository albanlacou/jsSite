document.getElementById("explication_1").style.display = "none";
document.getElementById("explication_2").style.display = "none";

const btDisplay=document.getElementById("bt_display");
btDisplay.addEventListener("click",displayImage);

console.log(btDisplay);

function clik(){
    
    let name=document.getElementById("name").value;
    document.getElementById("h2").textContent =name;
    console.log(name);
}
  

function displayImage(){
    document.getElementById("explication_1").style.display = "block";
    document.getElementById("explication_2").style.display = "block";
}

//jeu smash 

let randomNumber = Math.floor(Math.random() * 9) + 1;
      const guesses = document.querySelector('.guesses');
      const lastResult = document.querySelector('.lastResult');
      const lowOrHi = document.querySelector('.lowOrHi');
      const guessSubmit = document.querySelector('.guessSubmit');
      const guessField = document.querySelector('.guessField');
      let guessCount = 1;
      let resetButton;
      guessField  
      function checkGuess(){
        let userGuess = Number(guessField.value);
        if (guessCount === 1) {
          guesses.textContent = 'vos différents éssai: ';
        }

        guesses.textContent += userGuess + ' ';   //envoi une réponse en fonction de la réponse du joueur
        if (userGuess === randomNumber) {
          lastResult.textContent = 'félicitation vous avez trouvez en ' + guessCount + " fois ! Si vous voullez recommencer cliquer sur le bouton Start New game ";
          lastResult.style.backgroundColor = 'green';
          lowOrHi.textContent = '';
          setGameOver()
         
        } else {
          lastResult.textContent = 'faux!';
          lastResult.style.backgroundColor = 'red';
          if(userGuess < randomNumber) {
            lowOrHi.textContent = " non ce n'ai pas la bonne puissance elle est trop petite" ;
          } else if(userGuess > randomNumber) {
            lowOrHi.textContent = "non ce n'ai pas la bonne puissance elle est trop grande !";
          }
        }
        guessCount++; //incrémente de 1
        guessField.value = '';
        guessField.focus();
      }
      guessSubmit.addEventListener('click', checkGuess); // cette fonction permet de remettre a zero le jeux et de pouvoir relancer une partie
      function setGameOver() {
        guessField.disabled = true;
        guessSubmit.disabled = true;
        resetButton = document.createElement('button');
        resetButton.textContent = 'Start new game';
        document.body.appendChild(resetButton);
        resetButton.addEventListener('click', resetGame);
      }
     
      function resetGame() {
        guessCount = 1;
        const resetParas = document.querySelectorAll('.resultParas p');
        for(let i = 0 ; i < resetParas.length ; i++) {
          resetParas[i].textContent = '';
        }
        resetButton.parentNode.removeChild(resetButton); //desactive les bouton lorsque le joueur a donnez dix réponse erroner
        guessField.disabled = false; //desactive la zone de caractère lorsque le joueur arrive à dix tentatives erroner
        guessSubmit.disabled = false;//desactive le bouton d'envoi lorsque le joueur arrive à dix tentatives erroner
        guessField.value = ''; //remet la barre de texte a zero
        guessField.focus();
        lastResult.style.backgroundColor = 'white';
        randomNumber = Math.floor(Math.random() * 9) + 1;
      }
      
     

      //konamicode
var allowedKeys = {
  37: 'left',
  38: 'up',
  39: 'right',
  40: 'down',
  65: 'a',
  66: 'b'
};


var konamiCode = ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a'];


var konamiCodePosition = 0;


document.addEventListener('keydown', function(e) {
  
  var key = allowedKeys[e.keyCode];
  
  var requiredKey = konamiCode[konamiCodePosition];

 
  if (key == requiredKey) {

    
    konamiCodePosition++;

   
    if (konamiCodePosition == konamiCode.length) {
      activateCheats();
      konamiCodePosition = 0;
    }
  } else {
    konamiCodePosition = 0;
  }
});

function activateCheats() {
  window.open("./page_konami.html");

  alert("cheats activated");
}