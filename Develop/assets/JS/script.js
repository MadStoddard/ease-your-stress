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


function loadImg() {
    var catApi = "https://api.thecatapi.com/v1/images/search?api_key=64449b51-6a0d-4e9c-be78-0517d1e9f6a7";
    var imageDiv = document.querySelector(".cat-image");
    fetch(catApi)
    .then(response => {
        return response.json();
    })
    .then(data => {
        for (var i=0; i <data.length; i++) {
            var imageEl = document.createElement('img');
            imageEl.src = data[i].url;
            imageDiv.append(imageEl);
        }
    });
    

}

loadImg();

