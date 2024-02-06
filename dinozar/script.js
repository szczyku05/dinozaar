var postac = document.getElementById("postac");
var bloczek = document.getElementById("bloczek");
var counter=0;
function skok(){
    if(postac.classList == "animate"){return}
    postac.classList.add("animate");
    setTimeout(function(){
        postac.classList.remove("animate");
    },300);
}
var checkDead = setInterval(function() {
    let postacTop = parseInt(window.getComputedStyle(postac).getPropertyValue("top"));
    let bloczekLewy = parseInt(window.getComputedStyle(bloczek).getPropertyValue("left"));
    if(bloczekLewy<20 && bloczekLewy>-20 && postacTop>=130){
        bloczek.style.animation = "none";
        alert("Gra zakonczona, punkty: "+Math.floor(counter/100));
        counter=0;
        bloczek.style.animation = "block 1s infinite linear";
    }else{
        counter++;
        document.getElementById("scoreSpan").innerHTML = Math.floor(counter/100);
    }
}, 10);