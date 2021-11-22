let searchInput = document.getElementById('search');
let templete = document.getElementById('template');
searchInput.addEventListener('keyup',e =>{
 if(e.key==="Enter"){
        
    let searchText = e.target.value;
    searchGitUser(searchText);
    
 }
 
}) 

let btn = document.getElementById("btn");
btn.addEventListener("click",e=>{
 window.SpeechRecognition = window.webkitSpeechRecognition;
 let Speech = new SpeechRecognition();
 Speech.addEventListener("result",e=>{
 let text = e.results[0][0].transcript;
 let finalWord = (searchInput.value = text )
 searchGitUser(finalWord)
 })
 Speech.start();
});
async function searchGitUser(searchValue){
 let URL = 'https://api.github.com/users';
 let DATA = await window.fetch(`${URL}/${searchValue}`);
 let JSON = await DATA.json();
 let {login ,avatar_url,html_url,company,location,bio} = JSON;

templete.innerHTML =`
<main>
 <div>
 <img src =${avatar_url} alt = ${login}/>
 <h2>${html_url}</h2>
 <h2>${company}</h2>
 <h2>${location}</h2>
 <h2>${bio}</h2>
 </div>
</main>
`}