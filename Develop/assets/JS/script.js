
var catApi = "https://api.thecatapi.com/v1/images/search"

fetch(catApi)
.then(function(response) {
    response.json().then(function(data) {
        console.log(data);

    });
});
