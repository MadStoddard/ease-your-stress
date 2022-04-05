var GratBtn = document.getElementById('GratitudeSubmit');    
var GratText = document.getElementById('Gratitude-text');
var AppBtn = document.getElementById('AppreciationSubmit');
var AppText = document.getElementById('Appreciation-prompt');
var AppreciationSection = document.getElementById('Appreciation');
var GratitudeSection = document.getElementById('Gratitude');

function ImGratefulForSubmit (){

    AppText.innerHTML = `I Appreciate ${GratText.value} Because `;    
    AppreciationSection.style.display = 'block';
    GratitudeSection.style.display = 'none';
}

GratBtn.addEventListener('click', ImGratefulForSubmit);