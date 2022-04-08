var recipeImg = document.getElementById('recipe-img');
var recipeLink = document.getElementById('recipe-link');
var recipeName = document.getElementById('recipe-name');
var favoriteBtn = document.getElementById('favoriteBtn');
var showFavorites =document.getElementById('showFavorites');
var favList = document.getElementById('favList');
var parkImg = document.getElementById('parkImg');
var favArr = [];
var link;
var name1 = '';
var bd = true;
var text ='';
var query = '';
function RandomNum (min,max) {
    
        min = Math.ceil(min)
        max= Math.floor(max)
        //console.log(Math.floor(Math.random() * (max - min) + min));
        return Math.floor(Math.random() * (max - min) + min);
        
}
favoriteBtn.addEventListener('click', function() {
    name1 = localStorage.getItem('recipe-name');
    favArr = localStorage.getItem('favArr');
    link = localStorage.getItem('recipe-link');
    img = localStorage.getItem('recipe-img');
    if ( favArr === null) {
        favArr = [];
        favArr[0] = name1 + '::' + link + '::' + img;
        favArr = JSON.stringify(favArr);
        localStorage.setItem('favArr',favArr);

    } else {
        favArr = JSON.parse(favArr);
        favArr.push(name1 + '::' + link + '::' + img);
        favArr = JSON.stringify(favArr);
        localStorage.setItem('favArr',favArr);
    }
    favoriteBtn.setAttribute('style','display:none');
})
showFavorites.addEventListener('click',function(){
    favArr = localStorage.getItem('favArr')
    favArr = JSON.parse(favArr);
    if (favArr!=null && bd == true) {
        for(var i=0;i<favArr.length;i++){
        var li = document.createElement('li') 
        var a = document.createElement('a') 
        var img = document.createElement('img') 

        text = favArr[i]
        text = text.split('::')
        img.setAttribute('src',text[2]);
        a.setAttribute('href',text[1]);
        a.textContent = text[0];
        favList.appendChild(li);
        li.appendChild(a);
        li.appendChild(img);
        bd = false;
    };
    }else if (bd == false){
        favList.setAttribute('style','display:none');
        bd = null;
    } else if (bd == null){
        favList.setAttribute('style','display:block');
        bd = false;
    }
    
   
})
fetch('https://api.edamam.com/api/recipes/v2?type=public&q=cookie&app_id=0637c2e7&app_key=d01b1197825271e3271e1c4e7c26646f&mealType=Snack&dishType=Biscuits%20and%20cookies&imageSize=SMALL&random=true')
	.then(response => response.json())
	.then(function(data) { 
        console.log(data);
        console.log(data.hits[0].recipe);
        recipeImg.setAttribute('src',data.hits[0].recipe.image);
        recipeLink.setAttribute('href',data.hits[0].recipe.shareAs);
        recipeName.textContent = data.hits[0].recipe.label;
        console.log(data.hits[0].recipe.shareAs);
        localStorage.setItem('recipe-link',data.hits[0].recipe.url);
        localStorage.setItem('recipe-name',data.hits[0].recipe.label);
        localStorage.setItem('recipe-img',data.hits[0].recipe.image);
    });
// random cat image
function loadImg() {
    var catApi = "https://api.thecatapi.com/v1/images/search?api_key=64449b51-6a0d-4e9c-be78-0517d1e9f6a7";
    var imageDiv = document.querySelector(".cat-image");
    fetch(catApi)
    .then(response => {
        return response.json();
    })

	.catch(err => console.error(err));

};
// random cat image
function loadImg() {
    var catApi = "https://api.thecatapi.com/v1/images/search?api_key=64449b51-6a0d-4e9c-be78-0517d1e9f6a7";
    var imageDiv = document.querySelector(".cat-image");
    fetch(catApi)
    .then(response => {
        return response.json();
    })

    .then(function(data){
        
            var imageEl = document.getElementById('cat-image');
            imageEl.setAttribute('style','border: 8px solid #1C6EA4');
            imageEl.src = '';
            imageEl.src = data[0].url;
            imageDiv.append(imageEl);
        
    });
};

    
var catBtn = document.querySelector("#image-btn");

catBtn.addEventListener('click', loadImg);


