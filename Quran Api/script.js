
// selection by id's and class names
const c = document.querySelector(".c");

const surahNo = document.getElementById("surahNo");
const submitBtn = document.getElementById("submitBtn");
const msg = document.querySelector(".msg");
const search = document.querySelector(".search");
const del = document.querySelector(".del");
const display = document.querySelector(".display");
const surahName = document.querySelector(".surahName");
const padding = document.querySelector(".padding");
const icon = document.querySelector(".icon");


// del working

del.addEventListener("click" , function(event){
  
  
 surahNo.value = "";
 submit = 1 ;  // it is done 1 because after del if (submit === 1) condition true karni
 searchButton = 1; // it is done 1 because after del if(search === 1) condition true karni
 search.innerHTML = "";
 surahName.innerText = ""; // if is done for surah name
 display.innerText = ""; // it is done for display
 icon.innerHTML = ""; // it is done for icon
 if(count === 0)  count = 0;// it is done for volume that after del if(count === 0) condition true karni
 else count = 0;


});


let submit = 1;
let searchButton = 1;
let count =  0;

//submit button working with submitDisplay

submitBtn.addEventListener("click" , function(event){
    event.preventDefault();
    if(submit === 1)
    {
      const suratNumber = surahNo.value;
      if(suratNumber >=1 && suratNumber <=114 )
      {
        successMsg("Entered Surah number is valid")
        submit = 0; 
      } 
      else
      {
        failureMsg("Entered Surah Number is not valid . Surah Number must be in between 1 and 114...");
      }
      if(suratNumber >=1 && suratNumber <=114) submitDisplay(); // starting , ending number inputs and search button display
     
    }
   
});





function submitDisplay() {
    
    const span = document.createElement("span");
    span.classList.add("d-flex");
    span.classList.add("justify-content-around");
    span.classList.add("m-3");

    //starting surah
    const startSurah = document.createElement("startSurah");
    startSurah.innerHTML = `
    <h4>Enter Starting Ayah Number</h4>
    <input type= "number" class = "p-2 rounded border border-secondary width text-center inputStart"/>
    `;
    span.appendChild(startSurah);

    //ending surah
    const endingSurah = document.createElement("endingSurah");
    endingSurah.innerHTML = `
    <h4>Enter Ending Ayah Number</h4>
    <input type= "number" class = "p-2 rounded border border-secondary width text-center inputEnd"/>
    `;

    span.appendChild(endingSurah);

    //span putting in search
    search.appendChild(span);
    
    
    const div = document.createElement("div");
    div.innerHTML = `
    <button class="btn btn-secondary border border-secondary m-3 " id="searchBtn">Search</button>
    `;

    search.appendChild(div);


     //Ayat display

    const searchBtn = document.getElementById("searchBtn");
    const inputStart = document.querySelector(".inputStart");
    const inputEnd = document.querySelector(".inputEnd");
    searchBtn.addEventListener("click" , function(event){
  
     if(searchButton === 1) {
   
     const request1 = new XMLHttpRequest();
     request1.open("Get" , "http://api.alquran.cloud/v1/quran/quran-uthmani");
     request1.send();
     request1.addEventListener("load" , function(){
     const response = JSON.parse(this.responseText);

     padding.classList.add("p-5");
     surahName.innerText = "\n" + response.data.surahs[surahNo.value-1].name + "\n" + ".................";

     //taking length of surah
     let length = response.data.surahs[surahNo.value-1].ayahs.length;

     if(inputStart.value >= 1 && inputStart.value <=length && inputEnd.value >= inputStart.value && inputEnd.value <= length)
     {
        successMsg("Entered numbers are valid .....")
        searchButton = 0;

        for(let i = inputStart.value-1; i <inputEnd.value; i++)
        {
           const p = document.createElement("p");
           p.innerText = response.data.surahs[surahNo.value-1].ayahs[i].text + "\n" + ".................................";
           p.classList.add("text-center");
           display.appendChild(p);
          
        }      

      }
     else
      {

        failureMsg("Entered numbers are not valid....")

      }

    });
  }

  else failureMsg("Surah is already displaying....")

  });
}
       




//Success message

function successMsg(message){

  msg.innerText = message;
  msg.classList.remove("alert-danger");
  msg.classList.add("alert-success");
  msg.classList.remove("d-none");
  msg.classList.add("text-center");
  msg.classList.add("fw-bold");
  setTimeout(() => {
      msg.classList.remove("alert-success");
      msg.classList.add("d-none");
  }, 1000);

}

//failure msg
function failureMsg(message){

  msg.innerText = message;
  msg.classList.add("alert-danger");
  msg.classList.remove("d-none");
  msg.classList.add("fw-bold");

  setTimeout(() => {
      msg.classList.remove("alert-danger");
      msg.classList.add("d-none");
  }, 4000);
 
}
  



 
 

  

   
   
 



  //volume


  icon.addEventListener("click", function() {
   
    //abi is Playing false condition chala gi 
    if (count === 0) {

      count = 1; //isPlaying 1 ha  ab agr 2nd time volume icon click tu else condition chala gi tb tk jb tk count 0 ni ho jata
       
      //Starting and ending input
      const inputStartV = document.querySelector(".inputStart");
      const inputEndV= document.querySelector(".inputEnd");

      
  
      const request2 = new XMLHttpRequest();
      request2.open("Get" , "http://api.alquran.cloud/v1/quran/ar.alafasy");
      request2.send();



      request2.addEventListener("load" , function(event){

        const response = JSON.parse(this.responseText);
        let length = response.data.surahs[surahNo.value-1].ayahs.length;
        let i = inputStartV.value - 1;
        function playNextAudio() 
        {
        if (i < inputEndV.value)
         {
          
          let url = response.data.surahs[surahNo.value - 1].ayahs[i].audio;
          const icon = document.querySelector(".icon");
          let audio = document.createElement("audio");
          audio.src = url;
          audio.autoplay = true;
          icon.appendChild(audio);
          audio.onended = function() {
            // Remove the current audio element
          icon.removeChild(audio);
          if(i === inputEndV.value - 1)
          {
            //count 0 ho gia now if condition run if icon presss
            count = 0;
           
          }
          // Play the next audio
          i++;
             
          playNextAudio();
         
          };
          
         }
         
         }

         // when we write function then must call it
         playNextAudio();
        
          });

        }

       else failureMsg("Audio is already playing");
    
  
    
  });
  
 