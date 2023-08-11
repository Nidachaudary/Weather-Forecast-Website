


const input = document.querySelector(".input");
const button = document.querySelector(".button");
const eyeIcon = document.querySelector(".eyeIcon");



const numberIcon = document.querySelector(".numberIcon");
const upperIcon = document.querySelector(".upperIcon");
const lowerIcon = document.querySelector(".lowerIcon");
const symbolIcon = document.querySelector(".symbolIcon");
const lengthIcon = document.querySelector(".lengthIcon");

//select the span
const lenSpan = document.getElementById("len-span");
const numSpan = document.getElementById("num-span");
const upperSpan = document.getElementById("upper-span");
const lowerSpan = document.getElementById("lower-span");
const symbolSpan = document.getElementById("symbol-span");



//for eye Icon
button.addEventListener("click" , function(){
    
    if(input.type === "password")
    {
        input.type = "text";
        eyeIcon.classList.remove("fa-eye");
        eyeIcon.classList.add("fa-eye-slash");
      
    }
   
    else 
    {
        input.type = "password";
        eyeIcon.classList.add("fa-eye");
        eyeIcon.classList.remove("fa-eye-slash");
    }

   
});

//for seeing input fill the terms and conditions





input.addEventListener("keyup" , function(e){

 
   const data = input.value;
   let number = 0;
   let uppercaseLetter = 0;
   let lowercaseLetter = 0;
   let symbols = 0;
   
   
  
   for(let i = 0; i< data.length ;i++)
   {

    
  // if uppercase , lowercase , symbol , number and length greater than 8 than function call and display change
   matchDisplaySetting(data[i] , i);
   

//check that in string uppercase letter , lowercase letter , symbol , number exist or not
   for(let i = 0; i<data.length ; i++)
{
    if(1)console.log("hello");
    if(2)console.log("wordl");
    if(data[i] >= "0" & data[i] <= "9")
    {
        number = 1;
      
    }

    if(data[i] >= "a" & data[i] <= "z")
    {
        lowercaseLetter = 1;
      
    }

    if(data[i] >= "A" & data[i] <= "Z")
    {
        uppercaseLetter = 1;
        
    }
    if(data[i] === "!" || data[i] === "@" || data[i] === "#"  || data[i] === "$")
    {
       symbols = 1;
    }
}
  
   }   


   //agr string ma kuch ni tu display kesa
   if(input.value === "")
   {
  
    removeUpperDis();
    removeLowerDis();
    removeNumberDis();
    removeSymbolDis();
    removeLenDis();
   }
   //agr string ki length 8 sa kam tu display

   if(data.length < 8)
   {
    removeLenDis();
   }


  
  // agr number , uppercase , lowercase , symbol ni ha string ma tu display kesii

   
   if(number === 0)
   {
     removeNumberDis();
   
   }
   
   if(uppercaseLetter === 0)
   {
     removeUpperDis();
   }
   
   if(lowercaseLetter === 0)
   {
     removeLowerDis();
   }

   if(symbols === 0)
   {
    removeSymbolDis();
   }


   
   
   
   
    
 

   
   
});

function removeUpperDis()
{
   
    upperIcon.classList.add("fa-circle");
    upperIcon.classList.remove("fa-check");
    upperIcon.classList.add("text-secondary");
    upperIcon.classList.remove("iconStyle");
    upperSpan.classList.remove("text-color");

}

 function removeLowerDis()
 {
    lowerIcon.classList.add("fa-circle");
    lowerIcon.classList.remove("fa-check");
    lowerIcon.classList.add("text-secondary");
    lowerIcon.classList.remove("iconStyle");
    lowerSpan.classList.remove("text-color");
 }  
    

function removeNumberDis()
{
    numberIcon.classList.add("fa-circle");
    numberIcon.classList.remove("fa-check");
    numberIcon.classList.add("text-secondary");
    numberIcon.classList.remove("iconStyle");
    numSpan.classList.remove("text-color");
    
}
 
function removeSymbolDis()
{
    symbolIcon.classList.add("fa-circle");
    symbolIcon.classList.remove("fa-check");
    symbolIcon.classList.add("text-secondary");
    symbolIcon.classList.remove("iconStyle");
    symbolSpan.classList.remove("text-color");
    
}
   
  
function removeLenDis()
{
    lengthIcon.classList.add("fa-circle");
    lengthIcon.classList.remove("fa-check");
    lengthIcon.classList.add("text-secondary");
    lengthIcon.classList.remove("iconStyle");
    lenSpan.classList.remove("text-color");
}


function matchDisplaySetting(element , index)
{
   
    if(index === 7)
    {
        lengthIcon.classList.remove("fa-circle");
        lengthIcon.classList.add("fa-check");
        lengthIcon.classList.remove("text-secondary");
        lengthIcon.classList.add("iconStyle");
        lenSpan.classList.add("text-color");
      
    }
    if(element >= "A" & element <= "Z")
    {
        
        upperIcon.classList.remove("fa-circle");
        upperIcon.classList.add("fa-check");
        upperIcon.classList.remove("text-secondary");
        upperIcon.classList.add("iconStyle");
        upperSpan.classList.add("text-color");
    }
  
    if(element >= "a" & element <= "z")
    {
       
        lowerIcon.classList.remove("fa-circle");
        lowerIcon.classList.add("fa-check");
        lowerIcon.classList.remove("text-secondary");
        lowerIcon.classList.add("iconStyle");
        lowerSpan.classList.add("text-color");
        
    }
    

    if(element >= "0" & element <= "9")
    {
    
        numberIcon.classList.remove("fa-circle");
        numberIcon.classList.add("fa-check");
        numberIcon.classList.remove("text-secondary");
        numberIcon.classList.add("iconStyle");
        numSpan.classList.add("text-color");
        console.log("enclose");
        
    }

    if(element === "!" || element ==="@" || element <= "#" || element === "$")
    {
        
        symbolIcon.classList.remove("fa-circle");
        symbolIcon.classList.add("fa-check");
        symbolIcon.classList.remove("text-secondary");
        symbolIcon.classList.add("iconStyle");
        symbolSpan.classList.add("text-color");
        
    }

   
    
};



