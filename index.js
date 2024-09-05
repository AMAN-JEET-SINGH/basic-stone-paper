let diaplay=document.getElementById("display");
let yourc=document.getElementById('myc')
let myc=document.getElementById('yc')
let c=document.getElementsByTagName("button");
let computter=Math.floor(Math.random()*3);
console.log(c)
document.getElementById("rock").addEventListener("click", ()=>{
    yourc.innerHTML='stone'
    computter=Math.floor(Math.random()*3);
    if(computter==0){
        myc.innerHTML="rock"
        document.getElementById("im").src="rock.jpeg"
        diaplay.innerHTML="draw"
        diaplay.style.color="gray";
    }
    else if(computter==1){
        myc.innerHTML="paper"
        document.getElementById("im").src="paper.jpeg"
        diaplay.innerHTML="lost"
        diaplay.style.color="red";

    }
    else{
        myc.innerHTML="scissor"
        document.getElementById("im").src="scissor.jpeg"
        diaplay.innerHTML="won"
        diaplay.style.color="green";
    }

});
document.getElementById("paper").addEventListener("click", ()=>{
    yourc.innerHTML='paper'
    computter=Math.floor(Math.random()*3);
    if(computter==0){
        myc.innerHTML="rock"
        document.getElementById("im").src="rock.jpeg"
        diaplay.innerHTML="won"
        diaplay.style.color="green";
    }
    else if(computter==1){
        myc.innerHTML="paper"
        document.getElementById("im").src="paper.jpeg"
        diaplay.innerHTML="draw"
        diaplay.style.color="gray";

    }
    else{
        myc.innerHTML="scissor"
        document.getElementById("im").src="scissor.jpeg"
        diaplay.innerHTML="lost"
        diaplay.style.color="red";
    }

});
document.getElementById("scissor").addEventListener("click", ()=>{
    yourc.innerHTML='scissor'
    computter=Math.floor(Math.random()*3);
    if(computter==0){
        myc.innerHTML="rock"
        document.getElementById("im").src="rock.jpeg"
        diaplay.innerHTML="lost"
        diaplay.style.color="red";
    }
    else if(computter==1){
        myc.innerHTML="paper"
        document.getElementById("im").src="paper.jpeg"
        diaplay.innerHTML="won"
        diaplay.style.color="green";

    }
    else{
        myc.innerHTML="scissor"
        document.getElementById("im").src="scissor.jpeg"
        diaplay.innerHTML="draw"
        diaplay.style.color="gray";
    }

});
