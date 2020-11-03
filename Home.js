let test = "";
let step = 0;
let smash = 0;
let minecraft = 0;
let lol = 0;
let finalText = "";




function quiz()
{
	document.getElementById("b1").style.display = "block";
	document.getElementById("b2").style.display = "block";
	document.getElementById("b3").style.display = "block";
	document.getElementById("b4").style.display = "block";
	
	if (step == 0)
	{
		test = "Vous êtes plutôt?";
		document.getElementById("print").innerHTML = test;
		document.getElementById("start").style.display = "none";
		document.getElementById("b1").innerHTML = "combat nerveux";
		document.getElementById("b2").innerHTML = "du genre a foncer";
		document.getElementById("b3").innerHTML = "celui qui veut tout controler";
		document.getElementById("b4").innerHTML = "le branleur";
		return 0;


	}else if (step == 1) {
		test = "En cas d'invasion zombie vous preferer?:"
		document.getElementById("print").innerHTML = test;
		document.getElementById("b1").innerHTML = "courir en esquivant les zombies";
		document.getElementById("b2").innerHTML = "taper tout les mort-vivant que vous croiser";
		document.getElementById("b3").innerHTML = "construire un abri fortifier";
		document.getElementById("b4").innerHTML = "dormir sans vos parents pour vous reveiller";
	}else if (step == 2) {
		test = "votre arme préférée:"
		document.getElementById("print").innerHTML = test;
		document.getElementById("b1").innerHTML = "les poings toujours éfficace!!!";
		document.getElementById("b2").innerHTML = "un baton magique";
		document.getElementById("b3").innerHTML = "une bonne pioche sa fais toujours plaisir";
		document.getElementById("b4").innerHTML = "une batte";
	}else if (step == 3) {
		test = "quel genre de graphisme vous plait le plus?"
		document.getElementById("print").innerHTML = test;
		document.getElementById("b1").innerHTML = "classique";
		document.getElementById("b2").innerHTML = "fantastique";
		document.getElementById("b3").innerHTML = "retro";
		document.getElementById("b4").innerHTML = "réaliste";
	}else if (step == 4) {
		test = "votre niveau de patience:"
		document.getElementById("print").innerHTML = test;
		document.getElementById("b1").innerHTML = "je suis pas patient du tout";
		document.getElementById("b2").innerHTML = "extrmement patient";
		document.getElementById("b3").innerHTML = "j'ai une patience infini";
		document.getElementById("b4").innerHTML = "bof bof";
	}else if (step == 5) {
		test = "votre style de jeux preferer:"
		document.getElementById("print").innerHTML = test;
		document.getElementById("b1").innerHTML = "jeux de combat";
		document.getElementById("b2").innerHTML = "jeux de teamfight";
		document.getElementById("b3").innerHTML = "jeux de gestion et survie";
		document.getElementById("b4").innerHTML = "bof bof";

	}else if (step == 6) 
	{
		return finish();
	}
};

function result(nbButton)
{
	if (nbButton == 1) {
		smash++;
		step++;
		return quiz();
	}else if (nbButton == 2){
		lol++;
		step++;
		return quiz();
	}else if (nbButton == 3) {
		minecraft++;
		step++;
		return	quiz();
	}else{
		step++;
		return quiz();
	}
	
	return 0;
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
	document.getElementById("print").innerHTML = finalText;
}

