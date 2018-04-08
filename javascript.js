var playing = false;
var score;
var action;
var timeremaining;
var correctanswer;

//if we click on the start/reset button
document.getElementById("startreset").onclick=function(){
    //if we are playing
    if(playing==true)
        {
            location.reload(); //reload page
        }
    else{
        //if we are not playing
        
        //change into playing mode
        playing = true;
        
         //set score = 0
        score=0;
 document.getElementById("scorevalue").innerHTML=score;
        
        //show countdown box
   show("timer");
        timeremaining=60;
    document.getElementById("timervalue").innerHTML=timeremaining;
        
        //hide game over box
    hide("gameover");   
        
       //change button to reset
     document.getElementById("startreset").innerHTML="Reset Game";
        
        //start countdown
        
        startcountdown();
    
    //generate questions and answer    
        generateQA();
        
        
        
        }
}

//clicking on the answer box

for(i=1;i<5;i++){
    document.getElementById("box"+i).onclick = function()
{
    //check if we are playing
    if(playing == true)
    {
        if(this.innerHTML==correctanswer)
            {
                score++;
document.getElementById("scorevalue").innerHTML=score;
                
    //hide wrong box and show correct box
                hide("wrong");
                show("correct");
                setTimeout(function(){
                    hide("correct");
                },1000)
                
                //generate new Q&A
                
            generateQA();    
            }
            else{
                 hide("correct");
                show("wrong");
                setTimeout(function(){
                    hide("wrong");
                },1000)
            }
    }
}

}
//functions area

//start counter funcn
function startcountdown()
{
    action = setInterval(function(){
        timeremaining -=1;
    document.getElementById("timervalue").innerHTML=timeremaining;   
        if(timeremaining==0)
            {//game over
                stopcountdown();
                show("gameover");
document.getElementById("gameover").innerHTML="<p>Game over!!</p><p>You score is " + score +"</p>";  
                hide("timer");
                hide("correct");
                hide("wrong");
                playing = false;
                document.getElementById("startreset").innerHTML="Start Game";
            }
    },1000);
}

//stop counter funcn
function stopcountdown()
{
    clearInterval(action);
}

//hide elements
function hide(Id)
{
    document.getElementById(Id).style.display="none";
}

//show elements
function show(Id)
{
    document.getElementById(Id).style.display="block";
}

//generate Q&A
function generateQA()
{
    var x=1 + Math.round(9*Math.random());
    var y=1 + Math.round(9*Math.random());
    correctanswer=x*y;
    document.getElementById("question").innerHTML=x + "X" +y;
    
    //fill one box with correct answer
    var correctposition=1+Math.round(3*Math.random());
    document.getElementById("box" + correctposition).innerHTML=correctanswer;
    
    //fill the other boxes with wrong answers
    for(i=1;i<5;i++){
        if(i !==correctposition)
            {
        var wronganswer;
        do{
             wronganswer=(1 + Math.round(9*Math.random()))*(1 + Math.round(9*Math.random())); 
        }while(wronganswer == correctanswer)        
        wronganswer=(1 + Math.round(9*Math.random()))*(1 + Math.round(9*Math.random()));            
        document.getElementById("box"+i).innerHTML=wronganswer;      
            }
    }
}