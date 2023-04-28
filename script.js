window.document.addEventListener("click",addElement)
function addElement(){
   let h3 = document.createElement("h3");
   h3.innerHTML = "kumar";
   let myDiv = document.getElementById("my")
   myDiv.appendChild(h3)
}
