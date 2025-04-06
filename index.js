function bubbleGame(){
    var timerval=60;
    var hitval=0;
    var score= document.querySelector("#score");
    score.textContent=0;
    var pbtm=document.querySelector("#pbtm");
    const height = Number(getComputedStyle(document.querySelector("#pbtm")).height.replace("px",""))
    const width = Number(getComputedStyle(document.querySelector("#pbtm")).width.replace("px",""))
    const number = (height/88) * (width/88) ; 
    console.log(number, height, width);
    function bubbleMaker(){
        
        var clutter="";
        for (var i =0; i<number; i++){
            var n = Math.floor(Math.random()*10)
            clutter+=`            <div class="bubble">${n}</div>
        `;
            pbtm.innerHTML=clutter;
        }
    }

    function time(){
        var timer = setInterval(function(){
            if (timerval>0){
                timerval--; 
                document.querySelector("#timer").textContent=timerval;   
            }
            else{
                clearInterval(timer);
                pbtm.innerHTML=`<div class="over">GAME OVER </div>
                <div class = "over">Score: ${score.textContent}</div>
                <button id = "btn">Play Again</button>`
                document.querySelector("#btn")
                .addEventListener("click",function(){
                    bubbleGame();
                })
            }

                
                
            
        },1000);
    }

    function rhits(){
        hitval= Math.floor(Math.random()*10);
        document.querySelector("#hits").textContent=hitval;
    }

    function onClick(){
        pbtm.addEventListener("click", function(dets){
            if(Number(dets.target.textContent) === hitval){
                score.textContent= Number(score.textContent) +10;
                rhits();
                bubbleMaker();
            }
        })
        
        
    }

    bubbleMaker();
    onClick();
    rhits();
    time();
}

bubbleGame();
