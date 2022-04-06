const Grateful = [];
var btn = document.getElementById('btn');    
var text = document.getElementById('Gratitude-text');
if (localStorage.getItem("grateful")){
    Grateful.push(localStorage.getItem('grateful'));
}
function gratefulSave () {
Grateful.push(text.value);
console.log(Grateful);
localStorage.setItem('grateful', JSON.stringify(Grateful));
}

// random cat image
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
};

var catBtn = document.querySelector("#image-btn");
catBtn.addEventListener('click', loadImg);
