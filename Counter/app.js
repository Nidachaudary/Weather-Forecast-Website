let output = document.querySelector(".output");
const decreaseBtn = document.querySelector(".decrease");
const resetBtn = document.querySelector(".reset");
const increaseBtn = document.querySelector(".increase");


let result = 0;


decreaseBtn.addEventListener("click" , decreaseValue);
function decreaseValue(event)
{
    result = result - 1;
  output.textContent = result;
   
}

increaseBtn.addEventListener("click" , increaseValue);
function increaseValue(event)
{
    result = result + 1;
    output.textContent = result;
   
}


resetBtn.addEventListener("click" , resetValue);
function resetValue(event)
{
    result = 0;
   output.textContent = result;
}



