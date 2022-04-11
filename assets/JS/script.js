//Gratitude and appreciation elements
var GratBtn = document.getElementById('GratitudeSubmit');    
var GratText = document.getElementById('Gratitude-text');
var AppBtn = document.getElementById('AppreciationSubmit');
var AppText = document.getElementById('Appreciation-prompt');
var AppreciationSection = document.getElementById('Appreciation');
var GratitudeSection = document.getElementById('Gratitude');
var AppTextArea = document.getElementById('AppTextArea');
// eat in section elements
var recipeImg = document.getElementById('recipe-img');
var recipeLink = document.getElementById('recipe-link');
var recipeName = document.getElementById('recipe-name');
var favoriteBtn = document.getElementById('favoriteBtn');
var showFavorites = document.getElementById('showFavorites');
var favArr = [];
// laugh section  elements
var showCatFavorites = document.getElementById('showCatFavorites');
var catFavoriteBtn = document.getElementById('catFavoriteBtn');
var favList = document.getElementById('favList');
var favCatList = document.getElementById('favCatList');
var catBtn = document.getElementById('image-btn');

// global varables
var link;
var name1 = '';
var bd = true;
var bdc = true;
var text ='';
var query = '';

// funciton to add recipe to favorites
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
// function to display favorites
showFavorites.addEventListener('click',function(){
    favArr = localStorage.getItem('favArr')
    favArr = JSON.parse(favArr);
    if (favArr!=null && bd == true) {
        for(var i=0;i<favArr.length;i++){
        var li = document.createElement('li') 
        var a = document.createElement('a') 
        var img = document.createElement('img') 
        var p = document.createElement('p') 
        text = favArr[i]
        text = text.split('::')
        img.setAttribute('src',text[2]);
        a.setAttribute('href',text[1]);

        p.textContent = text[0];
        favList.appendChild(li);
        li.appendChild(p)
        li.appendChild(a);
        a.appendChild(img);
        bd = false;
    };
    }else if (bd == false){
        favList.setAttribute('style','display:none');
        bd = null;
    } else if (bd == null){
        favList.setAttribute('style','display:block');
        bd = false;
    }
    
   
});
// Add cat picture to favorites
catFavoriteBtn.addEventListener('click',function() {
   
    favArr = localStorage.getItem('favCatArr');
    img = localStorage.getItem('cat-image');
    if ( favArr === null) {
        favArr = [];
        favArr.push(img);
        favArr = JSON.stringify(favArr);
        localStorage.setItem('favCatArr',favArr);

    } else {
        favArr = JSON.parse(favArr);
        favArr.push(img);
        favArr = JSON.stringify(favArr);
        localStorage.setItem('favCatArr',favArr);
    }
    catFavoriteBtn.setAttribute('style','display:none');
})
// Display Favotire cat pictures
showCatFavorites.addEventListener('click',function(){
    favArr = localStorage.getItem('favCatArr')
    favArr = JSON.parse(favArr);
    if (favArr!=null && bdc == true) {
        for(var i=0;i<favArr.length;i++){
        li = document.createElement('li') 
        a = document.createElement('a') 
        img = document.createElement('img') 
        p = document.createElement('p') 
        text = favArr[i]
        // text = text.split('::')
        img.setAttribute('src',text);
        a.setAttribute('href',text);

        p.textContent = text[0];
        favCatList.appendChild(li);
        li.appendChild(a);
        a.appendChild(img);
        bdc = false;
    };
    }else if (bdc == false){
        favList.setAttribute('style','display:none');
        bdc = null;
    } else if (bdc == null){
        favList.setAttribute('style','display:block');
        bdc = false;
    }
    
})
// fetching the recipe
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

    })

	.catch(err => console.error(err));



// random cat image
function loadImg() {
    var catApi = "https://api.thecatapi.com/v1/images/search?api_key=64449b51-6a0d-4e9c-be78-0517d1e9f6a7";
    var imageDiv = document.querySelector(".cat-image");
    fetch(catApi)
    .then(response => {
        return response.json();
    })

    .then(function(data){
        console.log(data);
            var imageEl = document.getElementById('cat-image');
            imageEl.src = data[0].url;
            imageEl.setAttribute('style','border: 8px solid #1C6EA4');
            localStorage.setItem('cat-image', data[0].url);
    });
    catFavoriteBtn.setAttribute('style','display:block')
};
// Grateful Submit Button
function ImGratefulForSubmit (){
    AppText.innerHTML = `I appreciate ${GratText.value} because `;    
    AppreciationSection.style.display = 'block';
    GratitudeSection.style.display = 'none';
}
// Appreication Submit Button
function AppreciationSubmit() {
    console.log(GratText.value)
    
    for (var x = 100; x > 0; x--){
        if(localStorage.getItem(`I'm grateful for${x}`)){
        }  else {
            localStorage.setItem(`I'm grateful for${x}`, GratText.value);
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
// adding text to Gratitude list
function GratAddText(){
    
    for (x = 100; x > 0; x--){
        if(localStorage.getItem(`I'm grateful for${x}`)){
            var gratList = document.createElement("li");
            gratList.innerHTML = "I'm grateful for " + localStorage.getItem(`I'm grateful for${x}`) + " because " + localStorage.getItem(`I appreciate${x}`);
            document.getElementById("grat-scroll").prepend(gratList);
        }  else {
            return;
        }
    }
}

GratAddText();
// adding event listeners
GratBtn.addEventListener('click', ImGratefulForSubmit);
AppBtn.addEventListener('click', AppreciationSubmit);
catBtn.addEventListener('click', loadImg);
