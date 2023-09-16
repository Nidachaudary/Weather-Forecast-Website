// selection by id's and class names

const surahNo = document.getElementById("surahNo");
const searchIcon = document.getElementById("searchIcon");
const msg1 = document.querySelector(".msg1");
const msg2 = document.querySelector(".msg2");
const search = document.querySelector(".search");
const del = document.querySelector(".del");
const display = document.querySelector(".display");
const surahName = document.querySelector(".surahName");
const padding = document.querySelector(".padding");
const icon = document.querySelector(".icon");
const firstView = document.querySelector(".firstView");
const ayahDisplaySet = document.querySelector(".ayahDisplaySet");

// del working

del.addEventListener("click", function (event) {
  firstView.classList.remove("d-none");
  ayahDisplaySet.classList.add("d-none");
  surahNo.value = "";
  searchIconn = 1; // it is done 1 because after del if (searchIcon === 1) condition true karni
  searchButton = 1; // it is done 1 because after del if(searchButton === 1) condition true karni
  search.innerHTML = "";
  surahName.innerText = ""; // if is done for surah name
  display.innerText = ""; // it is done for display
  icon.innerHTML = ""; // it is done for icon
  if (count === 0)
    count = 0; // it is done for volume that after del if(count === 0) condition true karni
  else count = 0;
});

let searchIconn = 1;
let searchButton = 1;
let count = 0;

//seach icon click and it validates surah number and if surah number not correct entered error msg appears and if correct surah number entered starting and ending
//ayah input appear with search button and on search button click ayah display if correct ayah numbers are entered otherwise error msg show

searchIcon.addEventListener("click", function (event) {
  event.preventDefault();
  if (searchIconn === 1) {
    const suratNumber = surahNo.value;
    if (suratNumber >= 1 && suratNumber <= 114) {
      searchIconn = 0;
    } else {
      failureMsg("msg1", "Something went wrong");
    }
    if (suratNumber >= 1 && suratNumber <= 114) searchIconDisplay(); // starting , ending number inputs and search button display
  }
});

function searchIconDisplay() {
  const span = document.createElement("span");
  span.classList.add("d-flex");
  span.classList.add("flex-column");
  span.classList.add("justify-content-around");
  span.classList.add("m-3");

  // heading
  const heading = document.createElement("heading");
  heading.innerHTML = `
  <h4 class="text-center text-light">Give some more Info</h4>
  `;
  span.appendChild(heading);
  //starting surah
  const startSurah = document.createElement("startSurah");
  startSurah.innerHTML = `
   
    <input type= "number" placeholder="Starting Ayah" class = "text-center inputWidth p-2 m-1 inputStart"/>
    `;
  span.appendChild(startSurah);

  //ending surah
  const endingSurah = document.createElement("endingSurah");
  endingSurah.innerHTML = `
   
    <input type= "number" placeholder="Ending Ayah" class = "text-center inputWidth p-2 m-1 inputEnd"/>
    `;

  span.appendChild(endingSurah);

  //span putting in search
  search.appendChild(span);

  const div = document.createElement("div");
  div.innerHTML = `
    <button class="searchBtn p-2 m-3 " id="searchBtn">Search</button>
    `;

  search.appendChild(div);

  //Ayat display

  const searchBtn = document.getElementById("searchBtn");
  const inputStart = document.querySelector(".inputStart");
  const inputEnd = document.querySelector(".inputEnd");
  searchBtn.addEventListener("click", function (event) {
    if (searchButton === 1) {
      const request1 = new XMLHttpRequest();
      request1.open("Get", "http://api.alquran.cloud/v1/quran/quran-uthmani");
      request1.send();
      request1.addEventListener("load", function () {
        const response = JSON.parse(this.responseText);

        padding.classList.add("pb-5");
        surahName.innerText =
          response.data.surahs[surahNo.value - 1].name +
          "\n" +
          ".................";

        //taking length of surah
        let length = response.data.surahs[surahNo.value - 1].ayahs.length;

        if (
          inputStart.value >= 1 &&
          inputStart.value <= length &&
          inputEnd.value >= inputStart.value &&
          inputEnd.value <= length
        ) {
          firstView.classList.add("d-none");
          ayahDisplaySet.classList.remove("d-none");
          searchButton = 0;

          for (let i = inputStart.value - 1; i < inputEnd.value; i++) {
            const p = document.createElement("p");
            p.innerText =
              response.data.surahs[surahNo.value - 1].ayahs[i].text +
              "\n" +
              ".................................";
            p.classList.add("text-center");
            display.appendChild(p);
          }
        } else {
          failureMsg("msg1", "Something went wrong");
        }
      });
    } else failureMsg("msg1", "Surah is already displaying");
  });
}

function failureMsg(key, message) {
  //failure msg for first view page if any error occurs
  if (key === "msg1") {
    msg1.innerText = message;

    msg1.classList.remove("d-none");

    setTimeout(() => {
      msg1.classList.remove("alert-danger");
      msg1.classList.add("d-none");
    }, 2000);
  }
  //failure msg for second new page if any error occurs
  if (key === "msg2") {
    msg2.innerText = message;

    msg2.classList.remove("d-none");

    setTimeout(() => {
      msg2.classList.remove("alert-danger");
      msg2.classList.add("d-none");
    }, 2000);
  }
}

//for volume

icon.addEventListener("click", function () {
  //abi is Playing false condition chala gi
  if (count === 0) {
    count = 1; //isPlaying 1 ha  ab agr 2nd time volume icon click tu else condition chala gi tb tk jb tk count 0 ni ho jata

    //Starting and ending input
    const inputStartV = document.querySelector(".inputStart");
    const inputEndV = document.querySelector(".inputEnd");

    const request2 = new XMLHttpRequest();
    request2.open("Get", "http://api.alquran.cloud/v1/quran/ar.alafasy");
    request2.send();

    request2.addEventListener("load", function (event) {
      console.log("nida");
      const response = JSON.parse(this.responseText);

      let length = response.data.surahs[surahNo.value - 1].ayahs.length;
      let i = inputStartV.value - 1;
      function playNextAudio() {
        if (i < inputEndV.value) {
          let url = response.data.surahs[surahNo.value - 1].ayahs[i].audio;
          const icon = document.querySelector(".icon");
          let audio = document.createElement("audio");
          audio.src = url;
          audio.autoplay = true;
          icon.appendChild(audio);
          audio.onended = function () {
            // Remove the current audio element
            icon.removeChild(audio);
            if (i === inputEndV.value - 1) {
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
  } else failureMsg("msg2", "Audio is already playing");
});
