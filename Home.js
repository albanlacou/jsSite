let test = "";
let step = 0;
let smash = 0;
let minecraft = 0;
let lol = 0;
let finalText = "";




function quiz()
{
    

	document.getElementById("b1").style.display = "block";
	console.log(document.getElementById("b1").style.display = "block");
	document.getElementById("b2").style.display = "block";
	document.getElementById("b3").style.display = "block";
	document.getElementById("b4").style.display = "block";
	document.getElementById("start").style.display = "none";
	
	if (step == 0)
	{
		test = "Vous êtes plutôt?";
		document.getElementById("print").innerHTML = test;
		document.getElementById("start").style.display = "none";
		document.getElementById("b1").innerHTML = "Combat nerveux";
		document.getElementById("b2").innerHTML = "Du genre a foncer";
		document.getElementById("b3").innerHTML = "Celui qui veut tout controler";
		document.getElementById("b4").innerHTML = "Le branleur";
		return 0;


	} else if (step == 1) {
		test = "En cas d'invasion zombie vous preferez?:"
		document.getElementById("print").innerHTML = test;
		document.getElementById("b1").innerHTML = "Courir en esquivant les zombies";
		document.getElementById("b2").innerHTML = "Taper tout les mort-vivant que vous croiser";
		document.getElementById("b3").innerHTML = "Construire un abri fortifier";
		document.getElementById("b4").innerHTML = "Dormir sans vos parents pour vous reveiller";
	}else if (step == 2) {
		test = "votre arme préférée:"
		document.getElementById("print").innerHTML = test;
		document.getElementById("b1").innerHTML = "Les poings toujours éfficace!!!";
		document.getElementById("b2").innerHTML = "Un baton magique";
		document.getElementById("b3").innerHTML = "Une bonne pioche sa fais toujours plaisir";
		document.getElementById("b4").innerHTML = "Une batte";
	}else if (step == 3) {
		test = "quel genre de graphisme vous plait le plus?"
		document.getElementById("print").innerHTML = test;
		document.getElementById("b1").innerHTML = "Classique";
		document.getElementById("b2").innerHTML = "Fantastique";
		document.getElementById("b3").innerHTML = "Retro";
		document.getElementById("b4").innerHTML = "Réaliste";
	}else if (step == 4) {
		test = "votre niveau de patience:"
		document.getElementById("print").innerHTML = test;
		document.getElementById("b1").innerHTML = "Je suis pas patient du tout";
		document.getElementById("b2").innerHTML = "Extremement patient";
		document.getElementById("b3").innerHTML = "J'ai une patience infini";
		document.getElementById("b4").innerHTML = "Bof bof";
	}else if (step == 5) {
		test = "votre style de jeux preferer:"
		document.getElementById("print").innerHTML = test;
		document.getElementById("b1").innerHTML = "Jeux de combat";
		document.getElementById("b2").innerHTML = "Jeux de teamfight";
		document.getElementById("b3").innerHTML = "Jeux de gestion et survie";
		document.getElementById("b4").innerHTML = "Bof bof";

	}else if (step == 6) 
	{
		return finish();
	}
};

function result(nbButton) {
	if (nbButton == 1) {
		smash++;
		step++;

	}else if (nbButton == 2){
		lol++;
		step++;
	}else if (nbButton == 3) {
		minecraft++;
		step++;
	}else{
		step++;
	}
	return quiz();
	};

function finish ()
{
	if (smash>minecraft && smash>lol) 
	{
		finalText = "le jeux qui vous convient le mieux est: Super Smash Bros";
	}else if (minecraft>smash && minecraft>lol) 
	{
		finalText = "le jeux qui vous convient le mieux est: Minecraft";
	}else if (lol>smash && lol>minecraft) 
	{
		finalText = "le jeux qui vous convient le mieux est: League of Legend";
	}else if(lol == 0 && minecraft == 0 && smash == 0)
	{
		finalText = "aucun jeu ne vous convient vraiment vous n'etes peut etre pas fait pour ça?";
	}else{
		finalText = "tout les jeu peuvent vous convenir alors faite votre choix :)";
	}
	document.getElementById("b1").style.display = "none";
	document.getElementById("b2").style.display = "none";
	document.getElementById("b3").style.display = "none";
	document.getElementById("b4").style.display = "none";
	document.getElementById("print").innerHTML = finalText ;
}

