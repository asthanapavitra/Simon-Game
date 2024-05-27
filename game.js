 var gamePattern=[];
 var userClickedPattern=[];
 var buttonColors=["red","blue","green","yellow"]

 var level=0;
 var started = false;





$(document).keydown(function(){
    if(started==false)
      $("h1").text("Level "+level);
      nextSequence();
      
      started= true;

});

$(".btn").click(function(){
    var userChosenColor=this.id;
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor);
    animatePress(userChosenColor);
    checkAnswer(userClickedPattern.length-1);
    
})


function checkAnswer(currentLevel){
    if(userClickedPattern[currentLevel]===gamePattern[currentLevel]){
         
         if(userClickedPattern.length===gamePattern.length){
             setTimeout(function(){
                 nextSequence();
             },1000)
         }
    }
    else {
         playSound("wrong");
         $("body").addClass("game-over")
         $("h1").text("Game Over, Press Any Key to Restart");
         setTimeout(function(){
             $("body").removeClass("game-over")
         },200);
         
         startOver();
    }
 }

 function nextSequence(){
    userClickedPattern=[];
    level++;
    $("h1").text("Level "+ level);
    var randomNumber =Math.floor( Math.random()*4);
   
   
   
    var randomChosenColour= buttonColors[randomNumber];
    gamePattern.push(randomChosenColour);

    $("#"+randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
   playSound(randomChosenColour);
   animatePress(randomChosenColour);
 }
 
function playSound(name){
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(currentColor){
      $("#"+currentColor).addClass("pressed");
      setTimeout(function(){
        $("#"+currentColor).removeClass("pressed");
      },100);
     
}





 function startOver(){
    level=0;
    started=false;
    gamePattern=[];
   

 }