function getJSON(url) {
    return fetch(url)
        .then(function (response) {
        return response.json();
    })
        .catch(function (error) {
        console.log(error);
    });
}
function getPeople(url){
    getJSON(url).then(function(data){
        document.getElementById('row-one').innerHTML = data.people[1].name;
    });
}
var url = "//samdaw13.github.io/project/info.json";
getPeople(url);
