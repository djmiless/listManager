let fireBtn = document.querySelector("#fire");
let skyBtn = document.querySelector("#sky");
let body = document.body;
let cardBody = document.querySelectorAll(".card-body")[0];
let noteCardBody = document.querySelectorAll(".card-body")[1];
let notes = document.querySelector(".notes");
let addBtn = document.querySelector("#add-btn");
let noteItem = document.querySelector("#note-item");
let noteInfo = document.querySelector("#info");
let unorderedList = document.createElement("ul");
let para = document.querySelector(".notes > p");
notes.appendChild(unorderedList);
let listItems = document.querySelector(".notes > ul");



//when you click
fireBtn.onclick = function(){

    refreshPage();
    
    body.style.backgroundColor = "yellow";

    const img = document.createElement("img");

    img.src="assets/tik-tok-logo.png";

   

    cardBody.appendChild(img);
}


skyBtn.onclick = function(){

    refreshPage();

    body.style.backgroundColor = "blue";

}


function refreshPage(){
    cardBody.innerHTML = "";
}





//Notes
 addBtn.onclick = function(){


    noteItemValue = noteItem.value.trim();



    if(noteItemValue.length > 0){
        //the user entered data
        noteInfo.innerHTML = "<div class='alert alert-success'>Item added</div>";
        
        para.innerText = "";

        listItems.innerHTML += "<li>" + noteItemValue + " <small> | <a href='#note-item'>Edit</a>  | <a href='#' onclick='deleteItem(event)'>Delete</a></small></li>";
        
       

        //listItems.innerHTML += `<li>${noteItemValue}</li>`;

        // when the item has been deleted remove "item added"

        // To add local Storage
    localStorage.setItem("note-item", noteItem.value);
    noteItem(noteItem.value);

    function setItem(){
        
    let noteItem = localStorage.getItem("note-item");
    noteItem (noteItem);
    }


       
        

    }else{
        //the user did not enter data
       noteInfo.innerHTML += `<div class='alert alert-warning border-0'>You did not enter any data</div>`
    }

}




function deleteItem(event){
    event.target.parentNode.parentNode.remove();


    // how to delete 

    var deleteItem = confirm("Want to delete?");
    if (deleteItem) {
    //Logic to delete the item
    }
    

    //Item removed
    noteInfo.innerHTML = `<div class='alert alert-danger border-0'>Deleted Item</div>`


    //check the total number of children 

    if (unorderedList.children.length == 0) {
        para.innerText = 'You have no notes at the moment🩸'
    }

}





// const e = document.querySelector("#note-item");

// e.parentElement.removeChild(e);
