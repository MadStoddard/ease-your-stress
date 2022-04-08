var GratBtn = document.getElementById('GratitudeSubmit');    
var GratText = document.getElementById('Gratitude-text');
var AppBtn = document.getElementById('AppreciationSubmit');
var AppText = document.getElementById('Appreciation-prompt');
var AppreciationSection = document.getElementById('Appreciation');
var GratitudeSection = document.getElementById('Gratitude');
var AppTextArea = document.getElementById('AppTextArea');
function ImGratefulForSubmit (){
    AppText.innerHTML = `I Appreciate ${GratText.value} Because `;    
    AppreciationSection.style.display = 'block';
    GratitudeSection.style.display = 'none';
}

function AppreciationSubmit() {
    console.log(GratText.value)
    
    for (var x = 100; x > 0; x--){
        if(localStorage.getItem(`I'm Greatful For${x}`)){
        }  else {
            localStorage.setItem(`I'm Greatful For${x}`, GratText.value);
            localStorage.setItem(`I appreciate${x}`, AppTextArea.value);
            GratAddText();
            GratText.value = "";
            AppTextArea.value = "";
            AppreciationSection.style.display = 'none';
            GratitudeSection.style.display = 'block';
            return;
        }
    }
}

function GratAddText(){
    
    for (x = 100; x > 0; x--){
        if(localStorage.getItem(`I'm Greatful For${x}`)){
            var gratList = document.createElement("li");
            gratList.innerHTML = "I'm Greatful For " + localStorage.getItem(`I'm Greatful For${x}`) + " Because " + localStorage.getItem(`I appreciate${x}`);
            document.getElementById("grat-scroll").prepend(gratList);
        }  else {
            return;
        }
    }
}
GratAddText();
GratBtn.addEventListener('click', ImGratefulForSubmit);
AppBtn.addEventListener('click', AppreciationSubmit);