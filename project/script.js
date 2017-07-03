"use strict";
function getJSON(url) {
    return fetch(url)
        .then(function (response) {
            return response.json();
        })
        .catch(function (error) {
            console.log(error);
        });
}

function getPeople(url) {
    getJSON(url).then(function (data) {
        var dictators = data.people;

        var firstRow = document.getElementById('row-one');
        var secondRow = document.getElementById('row-two');
        dictators.forEach(function (person) {
            var tableData = document.createElement('td');
            var image = document.createElement('img');
            image.setAttribute('src', person.image);
            tableData.appendChild(image);
            firstRow.appendChild(tableData);
        });
        dictators.forEach(function (person) {
            var tableData = document.createElement('td');
            var anchor = document.createElement('a');
            anchor.setAttribute('href', '#');
            anchor.innerHTML = person.name;
            tableData.appendChild(anchor);

            secondRow.appendChild(tableData);
            anchor.addEventListener('click', function (event) {
                event.preventDefault();
                document.getElementById('information').style.display = 'block';

                document.getElementById('nickname').innerHTML = person.nickname;

                document.getElementById('birthdate').innerHTML = person.birthdate;

                document.getElementById('birthplace').innerHTML = person.birthplace;

                document.getElementById('deathdate').innerHTML = person.deathdate;

                document.getElementById('rise-to-power').innerHTML = person.risetopower;

            });
        });
    });
}

function getEarlyVictories(url) {
    getJSON(url).then(function (data) {
        var earlyBattles = data.earlyAxisVictories;
        var rowOne = document.getElementById('first-row');
        var rowTwo = document.getElementById('second-row');
        var rowThree = document.getElementById('third-row');
        var rowFour = document.getElementById('fourth-row');
       for(var i = 0; i < 3; i++){
           var image = document.createElement('img');
           image.setAttribute('src', earlyBattles[i].image);
           var tableRowOne = document.createElement('td');
           tableRowOne.appendChild(image);
           rowOne.appendChild(tableRowOne);
       }
        for(var i = 3; i < 6; i++){
            var image2 = document.createElement('img');
            image2.setAttribute('src', earlyBattles[i].image);
            var tableRowThree = document.createElement('td');
            tableRowThree.appendChild(image2);
            rowThree.appendChild(tableRowThree);
        }
        for(let i = 0; i < 3; i++){

            var tableData = document.createElement('td');

            var anchor1 = document.createElement('a');
            anchor1.setAttribute('href', "#");

            anchor1.innerHTML = earlyBattles[i].battleName;
            tableData.appendChild(anchor1);
            rowTwo.appendChild(tableData);

            anchor1.addEventListener('click', function (event) {

                event.preventDefault();
                document.getElementById('information').style.display = 'block';
                document.getElementById('axis-casualties').innerHTML = earlyBattles[i].casualtiesAxis;

                document.getElementById('allied-casualties').innerHTML = earlyBattles[i].casualtiesAllied

                document.getElementById('date-began').innerHTML = earlyBattles[i].dateBegan

                document.getElementById('date-ended').innerHTML = earlyBattles[i].dateEnded

                document.getElementById('victor').innerHTML = earlyBattles[i].victor;

                document.getElementById('image').innerHTML = earlyBattles[i].image2;

                document.getElementById('battle-description').innerHTML = earlyBattles[i].description;
            });

        }
        for(let i = 3; i < 6; i++){

            var tableData = document.createElement('td');

            var anchor1 = document.createElement('a');
            anchor1.setAttribute('href', "#");

            anchor1.innerHTML = earlyBattles[i].battleName;
            tableData.appendChild(anchor1);
            rowFour.appendChild(tableData);

            anchor1.addEventListener('click', function (event) {

                event.preventDefault();
                document.getElementById('information').style.display = 'block';
                document.getElementById('axis-casualties').innerHTML = earlyBattles[i].casualtiesAxis;

                document.getElementById('allied-casualties').innerHTML = earlyBattles[i].casualtiesAllied

                document.getElementById('date-began').innerHTML = earlyBattles[i].dateBegan

                document.getElementById('date-ended').innerHTML = earlyBattles[i].dateEnded

                document.getElementById('victor').innerHTML = earlyBattles[i].victor;

                document.getElementById('image').innerHTML = earlyBattles[i].image2;

                document.getElementById('battle-description').innerHTML = earlyBattles[i].description;
            });

        }

    });

}
var url = "//samdaw13.github.io/project/info.json";
getPeople(url);
getEarlyVictories(url);
