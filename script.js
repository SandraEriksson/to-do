const titleBox = document.getElementById("title-box");
const descBox = document.getElementById("desc-box");
const listContainer = document.getElementById("list-container");
const todaysDate = new Date().toLocaleDateString();



function addTask() {
    if(descBox.value === '' || titleBox.value === '') {
        alert("Du måste skriv något i båda fälten");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = todaysDate + " " + titleBox.value + ": " + descBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        
    }
    descBox.value = " ";
    titleBox.value = " ";
}

listContainer.addEventListener("click", function(e) {
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked"); 
        let res = e.target.innerHTML.split(" ");
        e.target.innerHTML = todaysDate + " " + res[1] +" " + res[2];
        console.log(res);
    }
    else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
    }
}, false);