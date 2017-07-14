"use strict";
const url = "//samdaw13.github.io/info.json";
var rowOne = document.getElementById('first-row');
var rowTwo = document.getElementById('second-row');
var rowThree = document.getElementById('third-row');
var rowFour = document.getElementById('fourth-row');

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
        console.log(data);
        var dictators = data.people;
        var firstRow = document.getElementById('row-one');
        var secondRow = document.getElementById('row-two');

        dictators.forEach(function (person) {

            //create the elements for the images
            var tableData = document.createElement('td');
            var image = document.createElement('img');
            var anchor = document.createElement('a');

            //set all the attributes
            anchor.setAttribute('href', '#');
            image.setAttribute('src', person.image);

            //append the childre
            anchor.appendChild(image);
            tableData.appendChild(anchor);
            rowOne.appendChild(tableData);

            anchor.addEventListener('click', function (event) {
                event.preventDefault();
                window.scrollTo(0, 150);
                document.getElementById('information').style.display = 'block';

                document.getElementById('nickname').innerHTML = person.nickname;

                document.getElementById('birthdate').innerHTML = person.birthdate;

                document.getElementById('birthplace').innerHTML = person.birthplace;

                document.getElementById('deathdate').innerHTML = person.deathdate;

                document.getElementById('rise-to-power').innerHTML = person.risetopower;

            });

        });
        dictators.forEach(function (person) {
            var tableData1 = document.createElement('td');
            var anchor1 = document.createElement('a');
            anchor1.setAttribute('href', '#');
            anchor1.innerHTML = person.name;
            tableData1.appendChild(anchor1);

            rowTwo.appendChild(tableData1);
            anchor1.addEventListener('click', function (event) {
                event.preventDefault();
                window.scrollTo(0, 150);
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


function earlyBattles(url) {
    getJSON(url).then(function (data) {
        console.log(data);
        var earlyBattles = data.earlyAxisVictories;
        getRows(earlyBattles);
    });
}
function turnOfTheTide(url) {
    getJSON(url).then(function (data) {
        console.log(data);
        var earlyBattles = data.turnOfTheTide;
        getRows(earlyBattles);
    });
}
function alliedOffensive(url) {
    getJSON(url).then(function (data) {
        console.log(data);
        var earlyBattles = data.alliedOffensive;
        getRows(earlyBattles);
    });
}
function defeatOfAxis(url) {
    getJSON(url).then(function (data) {
        console.log(data);
        var earlyBattles = data.defeatOfAxis;
        getRows(earlyBattles);
    });
}
function getRows(batteName) {
    var rowOne = document.getElementById('first-row');
    var rowTwo = document.getElementById('second-row');
    var rowThree = document.getElementById('third-row');
    var rowFour = document.getElementById('fourth-row');
    for (var i = 0; i < batteName.length / 2; i++) {
        createElements(batteName[i], rowOne, rowTwo);
    }
    for (var i = batteName.length / 2; i < batteName.length; i++) {
        createElements(batteName[i], rowThree, rowFour);
    }
}

function createElements(battle, row1, row2) {
    var image = document.createElement('img');
    image.setAttribute('src', battle.image);
    var tableRowOne = document.createElement('td');
    var tableRowTwo = document.createElement('td');
    var anchor = document.createElement('a');
    var anchor1 = document.createElement('a');
    anchor1.innerHTML = battle.battleName;
    anchor.setAttribute("href", "#");
    anchor1.setAttribute("href", "#");
    anchor.appendChild(image);
    tableRowOne.appendChild(anchor);
    row1.appendChild(tableRowOne);
    tableRowTwo.appendChild(anchor1);
    row2.appendChild(tableRowTwo);
    anchor.addEventListener('click', function (event) {
        addBattles(battle);
    });
    anchor1.addEventListener('click', function (event) {
        addBattles(battle);
    });
}

function addBattles(page) {
    event.preventDefault();
    window.scrollTo(0, 150);
    document.getElementById('information').style.display = 'block';
    document.getElementById('operation-name').innerHTML = page.operationName;
    document.getElementById('axis-casualties').innerHTML = page.casualtiesAxis;
    document.getElementById('allied-casualties').innerHTML = page.casualtiesAllied;;
    document.getElementById('date-began').innerHTML = page.dateBegan;
    document.getElementById('date-ended').innerHTML = page.dateEnded;
    document.getElementById('victor').innerHTML = page.victor;
    document.getElementById('battle-description').innerHTML = page.description;
}
