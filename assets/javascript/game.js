
// start game
$(document).ready(function() {

var pokemon = {
  'pikachu' : {
      name: 'Pikachu',
      image: 'assets/images/250px-Ash_Pikachu.png',
      health: 135,
      attackPower: 15,
      counterAttackPower: 15,
  },
   'charizard' : {
      name: 'Charizard',
      image: 'assets/images/charizard_anime.png',
      health: 180,
      attackPower: 20,
      counterAttackPower: 20,
  },
   'greninja' : {
      name: 'Greninja',
      image: 'assets/images/Ash_Greninja.png',
      health: 150,
      attackPower: 18,
      counterAttackPower: 18,
  },
   'jigglypuff' : {
      name: 'Jigglypuff',
      image: 'assets/images/Jigglypuff.png',
      health: 100,
      attackPower: 10,
      counterAttackPower: 10,
  }

};

// // Global variables for pokemon, their attacks, health.


  var currSelectedCharacter;
  var currDefender;
  var combatants = [];
  var indexOfSelChar;
  var attackResult;
  var turnCounter = 1;
  var winCounter = 0;

// use DOM = Document Object Model to render 
var renderSetup = function(pokemon, renderArea, makePokemon) {
  //character: obj, renderArea: class/id, makeChar: string
var pokeDiv = $("<div class='pokemon-panel' poke.name='" + pokemon.name + "'>");
var pokeName = $("<div class='pokemon-name'>").text(pokemon.name);
var pokeImage = $("<img-alt='image' class='pokemon-image'>").attr("src" + pokemon.image);
var pokeHealth = $("<div class='pokemon-health'>").text(pokemon.health);

$(pokeDiv).append(pokeName).append(pokeImage).append(pokeHealth);
// choose your character!


$(renderArea).append('.pokeDiv')
    if (pokemon === 'enemy') {
      $(pokeDiv).addClass("enemy")
      // $(character).appendTo("#enemies");
    } else if (pokemon === 'defender') {
      currDefender = pokemon;
      $(pokeDiv).addClass('yourPokemon');
    }
     console.log('pokemon in yourPokemon section');
};

var renderMessage;


var renderPokemon;
  //  $(this).remove().appendTo('#yourPokemon');
        //        } else {
      //  $(this).remove().appendTo('#enemies');
    //            }      
     //       });
 

//};




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
         // var audioElement = document.createElement('audio');{
         //audioElement.setAttribute('src', 'battle-music.mp3')
        //};

          $(".attackButton").on("click", function(){
            audioElement.play();
          });
      });

// $("#myButton").on("click", function(){
//   alert("hello world!");
// });




