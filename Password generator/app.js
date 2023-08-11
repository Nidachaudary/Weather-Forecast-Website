const result = document.getElementById("result");
const copy = document.getElementById("copy");
const length  = document.getElementById("length");
const uppercase = document.getElementById("uppercase");
const lowercase = document.getElementById("lowercase");
const number = document.getElementById("number");
const symbol = document.getElementById("symbol");
const btn = document.getElementById("btn");




btn.addEventListener("click" , function(){

    const hasLength = +length.value;
    const hasUpper = uppercase.checked;
    const hasLower = lowercase.checked;
    const hasNumber = number.checked;
    const hasSymbol = symbol.checked;
    generatePassword(hasLength , hasUpper , hasLower , hasNumber , hasSymbol);
}); 

copy.addEventListener("click" , function()
{
    let password = result.innerText;
    if(!password) return "";
    let textArea = document.createElement("textarea");
    textArea.value = password;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    textArea.remove();
    alert("Copied to the clipboard");
});

function generatePassword(hasLength ,hasUpper ,  hasLower , hasNumber , hasSymbol)
{
    password ="";
    if(!hasLength) return result.innerText = "Enter the Length";
    if(hasLength < 4 || hasLength > 20) return result.innerText ="Length must be in between 4 and 20";
    if(hasUpper + hasLower + hasNumber + hasSymbol === 0) return result.innerText = "Check atleast one checked box";
    
    for(let i = 0 ; i<hasLength ; i++ )
    {
       if(hasUpper) password += generateUppercase();
       if(hasLower) password += generateLowercase();
       if(hasNumber) password += generateNumber()
       if(hasSymbol) password += generateSymbol();
    }
   
    return result.innerText = password.substring(0, hasLength);
}






function generateUppercase()
{
    return String.fromCharCode(Math.floor(Math.random()*26) + 65);
}

function generateLowercase()
{
    return String.fromCharCode(Math.floor(Math.random()*26) + 97);
}

function generateNumber()
{
    return String.fromCharCode(Math.floor(Math.random()*10) + 48);
}

function generateSymbol()
{
    const str ="!@#$%^&*()?"
    let length = str.length;
    return str[Math.floor(Math.random()*length)];
}

