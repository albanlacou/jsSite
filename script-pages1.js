let champion = document.getElementById("Champion");
let roles = document.getElementById("Roles");
let principe = document.getElementById("Principe");
let jeu = document.getElementById("Jeu");
let text = document.getElementById("text");

document.getElementById("gnar").style.display = "none";
document.getElementById("kayn").style.display = "none";
document.getElementById("jeu").style.display = "none";



champion.addEventListener("click", truc)
roles.addEventListener("click", truc)
principe.addEventListener("click", truc)
jeu.addEventListener("click", truc)


function truc(event){
    console.log(event.target.id);
    if (event.target.id === "Champion"){
        document.getElementById("gnar").style.display = "block";
        text.innerHTML= "ta maman la chauve ";
        document.getElementById("kayn").style.display = "block";
        document.getElementById("jeu").style.display = "none";

    }
    else if (event.target.id === "Roles"){
        document.getElementById("gnar").style.display = "none";
        text.innerHTML="differents roles";
        document.getElementById("kayn").style.display = "none";
        document.getElementById("jeu").style.display = "none";
    }
    else if (event.target.id === "Principe"){
        document.getElementById("gnar").style.display = "none";
        text.innerHTML="resumer du jeu";
        document.getElementById("kayn").style.display = "none";
        document.getElementById("jeu").style.display = "none";
    }
    else if (event.target.id === "Jeu"){
        document.getElementById("gnar").style.display = "none";
        text.innerHTML="cliquer pour le jeu";
        document.getElementById("kayn").style.display = "none";
        document.getElementById("jeu").style.display = "block";
    }
}
