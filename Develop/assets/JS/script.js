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

var catApi = "https://api.thecatapi.com/v1/images/search?api_key=64449b51-6a0d-4e9c-be78-0517d1e9f6a7"
fetch(catApi)
.then(function(response) {
    response.json().then(function(data) {
        console.log(data);
        var catImgUrl = data[0].url;
        console.log(catImgUrl)
        var catImage = document.querySelector(".cat-image");
        catImage.textContent = catImgUrl;


    });
});
