function getJSON(url) {
    return fetch(url)
        .then(function (response) {
        return response.json();
    })
        .catch(function (error) {
        console.log(error);
    });
}
function getInfo(url){
    getJSON(url).then(function (data) {
       var franklin = data.Franklin;
        document.getElementById('location').innerHTML = franklin.City;
        document.getElementById('temp').innerHTML = franklin.High;
    });
}
var url = "//samdaw13.github.io/homework/weather.json"
getInfo(url);
