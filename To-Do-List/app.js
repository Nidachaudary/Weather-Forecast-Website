
const input = document.querySelector(".input");
const btn = document.querySelector(".button");
const list = document.querySelector(".list");



btn.addEventListener("click" , addToDo);



function addToDo(event){

    event.preventDefault();

    const inputTaken = input.value;

    const div = document.createElement("div");

    const li = document.createElement("li");
    li.innerText = inputTaken;

    const completeBtn = document.createElement("button");
    completeBtn.innerText = "Complete";
    completeBtn.classList.add("btnStyling1");
   

    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.classList.add("btnStyling1");


    div.appendChild(li);
    div.appendChild(completeBtn);
    div.appendChild(deleteBtn);

    list.appendChild(div);

    input.value = "";
   
}

list.addEventListener("click" , completeAndDeleteBtn);
function completeAndDeleteBtn(event)
{
    if(event.target.innerText === "Complete")
    {
      
        event.target.parentElement.classList.toggle("style");

    }


    if(event.target.innerText === "Delete")
    {
      
        event.target.parentElement.remove();

    }
}





