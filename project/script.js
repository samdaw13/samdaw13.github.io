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
        firstRow = document.getElementById('row-one');
        secondRow = document.getElementById('row-two')
        dictators.forEach(function(person){
            var tableData = document.createElement('td');
            var image = document.createElement('img');
            image.setAttribute('src', person.image);
            tableData.appendChild(image);
            firstRow.appendChild(tableData);
        });
        dictators.forEach(function(person){
            var tableData = document.createElement('td');
            var anchor = document.createElement('a');
            anchor.setAttribute('href', '#');
            anchor.innerHTML = person.name;
            tableData.appendChild(anchor);

            secondRow.appendChild(tableData);
            anchor.addEventListener('click', function(event){
               event.preventDefault();
                document.getElementById('information').innerHTML = person.rise-to-power;
            });
        });
    });
}
var url = "//samdaw13.github.io/project/info.json";
getPeople(url);
