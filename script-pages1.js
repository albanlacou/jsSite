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
        text.innerHTML = "<p>Parmi mes personnages favori il y a gnar une petite boulle de poil qu'il ne faut pas chercher si on ne veut pas prendre un monstre sur soit c'est un top laner asser faible actuelement mais c'est le personnage avec le gameplay qui me plait le plus lorsque gnar tape les gens il gagne des point de fureur et lorsqu'il a 100 de ces point il devient tres enerver et ce transforme en mega gnar un gros monstre qui fait peur. Parmi mes personnages favoris il y a Gnar : une petite boule de poil qu'il ne faut pas chercher si on ne veut pas prendre un monstre sur soi c'est un toplaner assez faible actuellement mais c'est le personnage avec le gameplay qui me plait le plus, lorsque Gnar tape les gens il gagne des points de fureur et lorsqu'il a 100 de ces points, il devient très énervé et se transforme en Méga Gnar un gros monstre qui fait peur. -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------Le second personnage que j'aime beaucoup est Kayn : un humain qui a volé une faux démoniaque et qui peut choisir de rester humain et oneshot des gens ou devenir un démon et pouvoir récupérer beaucoup de points de vie lorsqu'il fait des dégâts (autrement dit lifesteal) il peut choisir sa forme suivant les personnages qu'il tape s'il tape des personnages qui tapent à distance il obtiendra des orbes bleu qui lui donne sa forme humaine tandis que s'il tape des personnage avec des attaque au corps à corps il obtiendra des orbes rouge qui lui donne sa forme rouge, la démoniaque</p>";
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
        text.innerHTML = "<p>Différents rôles : dans le jeu il y a différents rôles pour gagner la partie le jungleur qui va se concentrer sur la partie en bleu de la carte, le toplaner qui est sur la partie jaune de la carte, le midlaner qui est sur la partie rouge de la carte et la botlane qui est composé de deux joueurs l'adc et le support qui eux sont sur la partie verte de la carte. Chacun de ces postes ont des rôles différents le but du jungleur est de prendre le plus de monstres présents dans la jungle et d'aller sur les lanes afin de faire un gank (c'est à dire attaquer l'ennemi pour avoir un avantage numérique). Le rôle du midlaner est de faire beaucoup de dégâts rapidement aussi appeler burst, le role du toplaner est de rester seul comme sur une île afin de prendre rapidement la base ennemie, tandis que dans la botlane le rôle de l'adc est de farm afin d'avoir de lourd dégâts sur la durée aussi appelée dps en fin de partie et le support est là pour peel l'adc c'est à dire l'aider a ne pas mourrir en lui rendant de la vie ou alors lui mettre des boucliers pour qu'il puisse plus tanker.<p>";
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
        text.innerHTML = "League of Legends est un jeu multijoueur de type moba c'est à dire un jeu en 5 contre 5 où le but est de détruire la base adverse, pour cela chaque joueur a un rôle précis (voir les différents rôles) pour détruire la base nous pouvons avoir plusieurs bonus disponibles tout au long de la partie. Les bonus principaux sont les niveaux et les objets pour avoir ces fameux objets il faut les acheter grâce à de l'or que l'on obtient en tuant les ennemies ou bien en tuant les sbires ennemis également.";
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
