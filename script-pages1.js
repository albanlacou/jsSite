let champion = document.getElementById("Champion");
let roles = document.getElementById("Roles");
let principe = document.getElementById("Principe");
let jeu = document.getElementById("Jeu");
let text = document.getElementById("text");

document.getElementById("gnar").style.display = "none";
document.getElementById("kayn").style.display = "none";
document.getElementById("jeu").style.display = "none";
document.getElementById("roles").style.display = "none";
document.getElementById("map").style.display = "none";
document.getElementById("tour").style.display = "none";
document.getElementById("inib").style.display = "none";
document.getElementById("nexus").style.display = "none";



champion.addEventListener("click", truc)
roles.addEventListener("click", truc)
principe.addEventListener("click", truc)
jeu.addEventListener("click", truc)


function truc(event) {
    console.log(event.target.id);
    if (event.target.id === "Champion") {
        document.getElementById("gnar").style.display = "block";
        text.innerHTML = "<p>Parmi mes personnages favori il y a gnar une petite boulle de poil qu'il ne faut pas chercher si on ne veut pas prendre un monstre sur soit c'est un top laner asser faible actuelement mais c'est le personnage avec le gameplay qui me plait le plus lorsque gnra tape les gens il gagne des point de fureur et lorsqu'il a 100 de ces point il devient tres enerver et ce transforme en mega gnar un gros monstre qui fait peur. -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------Le second personnage que j'aime beaucoup est Kayn un huamin qui a voler une faux demoniaque et qui peut choisir de rester humain et oneshot des gens ou etre un demon et pouvoir recuperer beaucoup de point de vie lorsqu'il fait des degats (autrement dit lifesteal) il peut choisir sa forme suivant les personnage qu'il tape si il tape des personnage qui tape a distance il obtiendra des orbes bleu qui lui donne sa forme humaine tandis que si il tape des personnage avec des attaque au corp a corp il obtiendra des orbes rouge qui lui donne sa forme rouge la demoniaque</p>";
        document.getElementById("kayn").style.display = "block";
        document.getElementById("jeu").style.display = "none";
        document.getElementById("roles").style.display = "none";
        document.getElementById("map").style.display = "none";
        document.getElementById("tour").style.display = "none";
        document.getElementById("inib").style.display = "none";
        document.getElementById("nexus").style.display = "none";
    }
    else if (event.target.id === "Roles") {
        document.getElementById("gnar").style.display = "none";
        text.innerHTML = "<p>Differents roles : dans le jeu il y a differents roles pour gagner la partie le jungleur qui va ce concentrer sur la partie en bleu de la carte le toplaner qui est sur la partie jaune de la carte, le midlaner qui est sur la partie rouge de la carte et la bot lane qui est composer de deux joueurs l'adc et le support qui eux sont sur la partie verte de la carte chacun de ces poste ont des roles differents le but du jungleur est de prendre le plus de monstre present dans la jungle et d'aller sur les lanes afin de faire un gank (c'est a dire attaquer l'ennemi pour avoir un avantage numerique) le role du mid laner est de faire beaucoup de degats rapidement aussi appeler burst, le role de toplaner est de rester seul comme sur un ile afinnde prendre rapidement la base ennemie, tandi que dans la bot lane le role de l'adc est de farm afin d'avoir de lourd degats sur la durer aussi appeller dps en fin de partie et le support est la pour peel l'adc c'est a dire l'aider a ne pas mourrir en lui rendant de la vie ou alors lui mettre des bouclier pour qu'il puisse plus tanker<p>";
        document.getElementById("kayn").style.display = "none";
        document.getElementById("jeu").style.display = "none";
        document.getElementById("roles").style.display = "block";
        document.getElementById("map").style.display = "block";
        document.getElementById("tour").style.display = "none";
        document.getElementById("inib").style.display = "none";
        document.getElementById("nexus").style.display = "none";
    }
    else if (event.target.id === "Principe") {
        document.getElementById("gnar").style.display = "none";
        text.innerHTML = "League Of Legend est un jeu multijoueur de type moba c'est a dire un jeu en 5 contre 5 ou le but est de detruire la base adverse pour cela chaque joueur a un role precis (voir les differents roles) pour detruire la base nous pouvons avoir plusieur bonus disponible tout au long de la partie. Les bonus principaux sont les niveaux et les objets pour avoir ces fameux objet il gaut les acheter grace a de l'argent que l'on obtient en tuant les ennemies ou bien en tuant les sbires ennemi egalement.";
        document.getElementById("kayn").style.display = "none";
        document.getElementById("jeu").style.display = "none";
        document.getElementById("roles").style.display = "none";
        document.getElementById("map").style.display = "none";
        document.getElementById("tour").style.display = "block";
        document.getElementById("inib").style.display = "block";
        document.getElementById("nexus").style.display = "block";
    }
    else if (event.target.id === "Jeu") {
        document.getElementById("gnar").style.display = "none";
        text.innerHTML = "cliquer pour le jeu";
        document.getElementById("kayn").style.display = "none";
        document.getElementById("jeu").style.display = "block";
        document.getElementById("roles").style.display = "none";
        document.getElementById("map").style.display = "none";
        document.getElementById("tour").style.display = "none";
        document.getElementById("inib").style.display = "none";
        document.getElementById("nexus").style.display = "none";
    }
}
