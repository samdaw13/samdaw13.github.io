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
        var dictators = data.people;
        document.getElementById('row-one').innerHTML = "";
        firstRow = document.getElementById('row-one')
        dictators.forEach(function(person){
            var tableData = document.createElement('td');
            var image = document.createElement('img');
            image.setAttribute('src', person.image);
            tableData.appendChild(image);
            firstRow.appendChild(tableData);

        });
    });
}
var url = "//samdaw13.github.io/project/info.json";
getPeople(url);
