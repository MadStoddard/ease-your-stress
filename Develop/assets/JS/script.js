const Greatful = [];
var btn = document.getElementById('btn');    
var text = document.getElementById('Gratitude-text');
if (localStorage.getItem("greatful")){
    Greatful.push(localStorage.getItem('greatful'));
}
function greatfulSave () {
Greatful.push(text.value);
console.log(Greatful);
localStorage.setItem('greatful', JSON.stringify(Greatful));
}

function greatfulText () {
    var button = document.createElement('button');
    button.innerHTML = gre

}


btn.addEventListener('click', greatfulSave);
