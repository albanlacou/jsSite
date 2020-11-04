let steve = document.getElementById("steve");
let modal = document.getElementById("modal");
let btnClose = document.getElementById("close");

function onClickedLeft(move){
	let test = parseInt(steve.style.left)+move;
	steve.style.left = "0px";
	steve.style.left = parseInt(steve.style.left)+test+"px";
	
}

function onClickedright(move){
	let test = parseInt(steve.style.left)-move;
	steve.style.left = "0px";
	steve.style.left = parseInt(steve.style.left)+test+"px";
	console.log(steve.style.left);
	if (parseInt(steve.style.left) == -400){
	
		return but();
	}
	
}

function onClickedtop(move){
	let test = parseInt(steve.style.top)-move;
	steve.style.top = "0px";
	steve.style.top = parseInt(steve.style.top)+test+"px";
	
}

function onClickedbot(move){
	let test = parseInt(steve.style.top)+move;
	steve.style.top = "0px";
	steve.style.top = parseInt(steve.style.top)+test+"px";
	
}
function but(){
	
	modal.style.display = "block";
	console.log(modal.style.display);
}

function closeModal(){
	modal.style.display = "none";
	steve.style.left = "0px";
}