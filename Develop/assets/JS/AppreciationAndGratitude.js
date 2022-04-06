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
    localStorage.setItem(GratText.value, AppTextArea.value);

    for (var x = 29; x > 0; x--){
        if(localStorage.getItem(`I'm Greatful For${x}`)){

        } else if (localStorage.getItem(`I'm Greatful For0`)){

        } else {
            localStorage.setItem(`I'm Greatful For0`, AppTextArea.value)
        }
    }
}

GratBtn.addEventListener('click', ImGratefulForSubmit);
AppBtn.addEventListener('click', AppreciationSubmit);