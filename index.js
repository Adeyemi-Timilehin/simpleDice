var randomValue=Math.floor(Math.random()*6)+1;

var randomValue2=Math.floor(Math.random()*6)+1;

var randomSource="dice"+randomValue+".png";

// var randomSource2="dice"+randomValue+".png";

var randomSourceImage="images/"+randomSource

var randomSourceImage2="images/dice"+randomValue2+".png";

document.querySelectorAll("img")[0].setAttribute("src",randomSourceImage);

var myImage=document.querySelectorAll("img")[1];

myImage.setAttribute("src",randomSourceImage2);

if(randomValue> randomValue2){
    document.querySelector("h1").innerHTML="🚩 PLAYER 1 WINS";
}

else if(randomValue < randomValue2){
    document.querySelector("h1").innerHTML="🚩 PLAYER 2 WINS";
}

else{
    document.querySelector("h1").innerHTML="DRAWS";
}