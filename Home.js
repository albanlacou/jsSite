let test = "";
let step = 0;
let smash = 0;
let minecraft = 0;
let lol = 0;
let finalText = "";
let questions = ["Vous êtes plutôt?","En cas d'invasion zombie vous preferez?:","votre arme préférée:",
"quel genre de graphisme vous plait le plus?","votre niveau de patience:","votre style de jeux preferer:"];
let reponse = [" ","Combat nerveux","Du genre a foncer","Celui qui veut tout controler","Le branleur","Courir en esquivant les zombies"
,"Taper tout les mort-vivant que vous croiser","Construire un abri fortifier","Dormir sans vos parents pour vous reveiller","Les poings toujours éfficace!!!"
,"Un baton magique","Une bonne pioche sa fais toujours plaisir","Une batte","Classique","Fantastique","Retro","Réaliste","Je suis pas patient du tout"
,"Extremement patient","J'ai une patience infini","Bof bof","Jeux de combat","Jeux de teamfight","Jeux de gestion et survie","jeux mobile"];

let bouton = "b1";
let nbreponse = 0;
let nbquestion = 0;
document.getElementById("link").style.display = "none";

function quiz()
{
	if(nbquestion == 6){
		return finish();
	}

	document.getElementById("b1").style.display = "block";
	document.getElementById("b2").style.display = "block";
	document.getElementById("b3").style.display = "block";
	document.getElementById("b4").style.display = "block";
	document.getElementById("start").style.display = "none";
	
	
	test = questions[nbquestion];
	document.getElementById("print").innerHTML = test;
	nbquestion++;
	console.log(lol)
		
	for(let i = 1;i<=4;i++){
		nbreponse++;
		bouton = "b"+String(i);
		document.getElementById(bouton).innerHTML = reponse[nbreponse];
		
		
			
	}return 0;
	
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
	console.log("finit")
	if (smash>minecraft && smash>lol) 
	{
		document.getElementById("link").href = "page-3.html";
		document.getElementById("link").innerHTML = " Super Smash Bros";
		finalText = "Le jeux qui vous convient le mieux est: ";
	}else if (minecraft>smash && minecraft>lol) 
	{
		document.getElementById("link").href = "page-2.html";
		document.getElementById("link").innerHTML = " Minecarft";
		finalText = "Le jeux qui vous convient le mieux est: ";
	}else if (lol>smash && lol>minecraft) 
	{
		document.getElementById("link").href = "page-1.html";
		document.getElementById("link").innerHTML = "  League of Legend";
		finalText = "Le jeux qui vous convient le mieux est: ";
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
	document.getElementById("link").style.display = "flex";
	
}

