
// start game
$(document).ready(function() {


var pokemonDivClass = ['.pikachu', '.charizard', '.greninja', '.jigglypuff']

var pokemon = {
  pikachu : {
      name: 'Pikachu',
      image: 'assets/images/250px-Ash_Pikachu.png',
      health: 125,
      attackPower: 15,
      counterAttackPower: 15,
  },
   charizard : {
      name: 'Charizard',
      image: 'assets/images/charizard_anime.png',
      health: 180,
      attackPower: 20,
      counterAttackPower: 20,
  },
   greninja : {
      name: 'Greninja',
      image: 'assets/images/Ash_Greninja.png',
      health: 150,
      attackPower: 18,
      counterAttackPower: 18,
  },
   jigglypuff : {
      name: 'Jigglypuff',
      image: 'assets/images/Jigglypuff.png',
      health: 100,
      attackPower: 10,
      counterAttackPower: 10,
  },

};

// // Global variables for pokemon, their attacks, health.

 var points = {
    // your health
    healthPoints : 0,
    // your attack power
    attackPower : 0,
    // calculated new power
    newPower : 0,
    // oponents health
    healthOpponent : 0,
    // opponents counter power
    counterPower : 0,
    // select opponent counter  
    selectCounter : 0,
    // is there an opponent
    opponentNow : false,
    // win counter
    winCounter : 0,
  }
}

var selectCharacter = function(arr) {

// choose your character!


$('.pokemon').on('click', function() {
                $(this).remove().appendTo('#yourPokemon');
            });
console.log('pokemon in yourPokemon section')

}

// Your character is now in the "Your Pokemon" section



//Enemies Available to Attack!


//$('.pokemon').on('click', function() {
  //              var pickEnemy = '.pokemon'
    //            $('pickEnemy').remove().appendTo('#enemies');
      //        }
        //    });

// choose your opponent! 

// fight section

// Attack!


// plays battle music!
          var audioElement = document.createElement('audio'){
          audioElement.setAttribute('src', 'assets/javascript/battle-music.mp3');
        }

          $(".attackButton").on("click", function(){
            audioElement.play();
          }
      });

//Defender 

// health meter (You attacked / Enemy attacked )

 //$('.crystalImage').on('click', function(){
  //    counter = counter + parseInt($(this).data('num'));
      
  //    $('#yourNumber').text(counter);
  //    if (counter > oppoent){
  //      alert('You won!!!!');
  //    }else if( counter < opponent){
   //     alert('You lost!');

// Remove enemy
  //      $("#yourOpponentName").empty()
 //       $("#yourOpponentInfo").empty()

//Reset button

//$('#reset').on('click', function() {
 //     $("#yourPokemon").empty(); 



