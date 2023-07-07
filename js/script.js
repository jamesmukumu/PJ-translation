const input = document.querySelector(".input");
const output = document.querySelector(".output");
const exchangeButton = document.querySelector(".fa-exchange-alt");
const selectTag = document.querySelectorAll("select");
const translateButton = document.getElementById('btn');

const icons = document.querySelectorAll(".fa");



function populateSelecttags(){
selectTag.forEach((tag,id)=>{
for(let country_code in countries){
const selected =(id===0 && country_code==='en-GB') || (!id==0 && country_code==='sw-SZ')?"selected":""

const option = `<option ${selected} value="${country_code}">${countries[country_code]}<option/> `
tag.insertAdjacentHTML('beforeend',option)

}




})





}
populateSelecttags()//calling the populate select option



function exchangeValues(){
const temporaryText = input.value
const temporaryLanguage = selectTag[0].value
input.value = output.value
output.value = temporaryText
selectTag[0].value = selectTag[1].value
selectTag[1].value  = temporaryLanguage


}
exchangeButton.addEventListener('click',exchangeValues)

function translateText(){
const text = input.value.trim()
const translatedFrom = selectTag[0].value
const translatedTo = selectTag[1].value
output.setAttribute('placeholder','kindly wait as we translate')
const languageApi = `https://api.mymemory.translated.net/get?q=${text}&langpair=${translatedFrom}|${translatedTo}`
fetch(languageApi)
.then((res)=>res.json())
.then((data)=>{
console.log(data)
output.value = data.responseData.translatedText
data.matches.forEach((data)=>{
if(data.id===0){
output.value = data.translation
}

})
output.setAttribute('placeholder','translation')
})

}
translateButton.addEventListener('click',translateText)

// Wait for the document to load
document.addEventListener('DOMContentLoaded', function() {
    // Get the input and output textarea elements
    var inputTextarea = document.querySelector('.input');
    var outputTextarea = document.querySelector('.output');
  
    // Get the clipboard i tags
    var copyInputButton = document.querySelector('.fa-clipboard');
    var copyOutputButton = document.querySelectorAll('.fa-clipboard')[1];
  
    // Get the volume i tags
    var volumeInputButton = document.querySelector('.fa-volume-up');
    var volumeOutputButton = document.querySelectorAll('.fa-volume-up')[1];
  
    // Add click event listener to copy input button
    copyInputButton.addEventListener('click', function() {
      // Copy text from input textarea to clipboard
      inputTextarea.select();
      document.execCommand('copy');
    });
  
    // Add click event listener to copy output button
    copyOutputButton.addEventListener('click', function() {
      // Copy text from output textarea to clipboard
      outputTextarea.select();
      document.execCommand('copy');
    });
  
    // Add click event listener to volume input button
    volumeInputButton.addEventListener('click', function() {
      // Play the audio for the text in input textarea
      var utterance = new SpeechSynthesisUtterance(inputTextarea.value);
      speechSynthesis.speak(utterance);
    });
  
    // Add click event listener to volume output button
    volumeOutputButton.addEventListener('click', function() {
      // Play the audio for the text in output textarea
      var utterance = new SpeechSynthesisUtterance(outputTextarea.value);
      speechSynthesis.speak(utterance);
    });
  
    // Add click event listener to translate button
    document.getElementById('btn').addEventListener('click', function() {
      // Perform translation here and update the output textarea
      // ...
    });
  });
  
  
  
  
  


  

