// create two variables to access character and logs
var character = document.getElementById("character");
var block = document.getElementById("block");
var counter=0;

//create the jump function for the character and reset the animation
function jump() {
  if(character.classList == "animate"){return}
    character.classList.add("animate");
  setTimeout(function (){
    character.classList.remove("animate");
  }, 300);
}

// set a function to check if a block as been hit and alert the user

var checkdead = setInterval(function () {
  var characterTop = parseInt(
    window.getComputedStyle(character).getPropertyValue("top")
  );
  var blockLeft = parseInt(
    window.getComputedStyle(block).getPropertyValue("left")
  );
  if (blockLeft < 20 && blockLeft >-20 && characterTop >= 130) {
    block.style.animation = "none";
    alert("Game Over. Your score is: "+ Math.floor(counter/100));
    counter=0
    block.style.animation = "block 1s infinite linear";
  }else{
    counter ++;
    document.getElementById("scoreSpan").innerHTML = Math.floor(counter/100);
  }
}, 10);

