let test = "comment vous appelez vous?";
let step = 0;
let rl = 0;
let minecraft = 0;
let lol = 0;





function quiz()
{
	if (step == 0)
	{
		test = "Vous êtes plutôt?";
		document.getElementById("print").innerHTML = test;
		document.getElementById("start").style.display = "none";
		document.getElementById("b1").innerHTML = "calme et réflechis";
		document.getElementById("b2").innerHTML = "du genre a foncer";
		document.getElementById("b3").innerHTML = "celui qui veut tout controler";
		document.getElementById("b4").innerHTML = "le branleur";
		return 0;


	}else if (step == 1) {
		test = "En cas d'invasion zombie vous preferer?:"
		document.getElementById("print").innerHTML = test;
		document.getElementById("b1").innerHTML = "fuir le plus loin possible";
		document.getElementById("b2").innerHTML = "taper tout les mort-vivant que vous croiser";
		document.getElementById("b3").innerHTML = "construire un abri fortifier";
		document.getElementById("b4").innerHTML = "dormir sans vos parents pour vous reveiller";
	}else if (step == 2) {
		test = "votre arme préférée:"
		document.getElementById("print").innerHTML = test;
		document.getElementById("b1").innerHTML = "une voiture pour écrasé tout sur votre passage";
		document.getElementById("b2").innerHTML = "un baton magique";
		document.getElementById("b3").innerHTML = "une bonne pioche sa fais toujours plaisir";
		document.getElementById("b4").innerHTML = "les poings toujours éfficace!!!";
	}

};

function result(nbButton)
{
	if (nbButton == 1) {
		rl++;
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