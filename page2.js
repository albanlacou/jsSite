let steve = document.getElementById("steve");


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
		console.log("yo")
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