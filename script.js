const inputBOX=document.getElementById("input-box");
const listCONTAINER=document.getElementById("list-container");

function addTask(){
    if(inputBOX.value === ''){
        alert("Please enter something!");
    }
    else {
        let li=document.createElement("li");
        li.innerHTML=inputBOX.value;
        listCONTAINER.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputBOX.value="";
    saveData();
}


  listCONTAINER.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("done");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);
  
function saveData(){
    localStorage.setItem("data",listCONTAINER.innerHTML);
}
function showData(){
    listCONTAINER.innerHTML=localStorage.getItem("data");
}
showData();