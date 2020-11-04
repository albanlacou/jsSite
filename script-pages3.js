document.getElementById("explication_1").style.display = "none";
document.getElementById("explication_2").style.display = "none";

const btDisplay=document.getElementById("bt_display");
btDisplay.addEventListener("click",displayImage);

console.log(btDisplay);

function clik(){
    
    let name=document.getElementById("name").value;
    document.getElementById("h2").textContent =name;
    console.log(name);
}
  

function displayImage(){
    document.getElementById("explication_1").style.display = "block";
    document.getElementById("explication_2").style.display = "block";
}

