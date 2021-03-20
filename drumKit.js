function make_sound(letter){
switch (letter){
        case "w":
        var tom1=new Audio("sounds/tom-1.mp3");
        tom1.play();
        break;
       
        case "a":
            var tom2=new Audio("sounds/tom-2.mp3");
            tom2.play();
        break;
        
        case "s":
            var tom3=new Audio("sounds/tom-3.mp3");
            tom3.play();
        break;
        
        case "d":
            var tom4=new Audio("sounds/tom-4.mp3");
            tom4.play();
        break;
        
        case "j":
            var snare=new Audio("sounds/snare.mp3");
            snare.play();
        break;
        
        case "k":
            var kick=new Audio("sounds/kick-bass.mp3");
            kick.play();
        break;
        
        case "l":
            var crash=new Audio("sounds/crash.mp3");
            crash.play();
        break;

        default:
    }
}


function add_animation(l){
    var high=document.getElementsByClassName(l)[0];
    high.classList.add("pressed");
    setTimeout(function(){
        high.classList.remove("pressed");
    },100);    
}


for(var i=0;i<document.getElementsByClassName("drum").length;i++)
{
    document.getElementsByClassName("drum")[i].addEventListener("click",function (){
        var value =this.innerHTML;
        make_sound(value);
        add_animation(value);
    });
}    

document.addEventListener("keypress",function(e){
    var v1=e.key;
    make_sound(v1);
    add_animation(v1);
});