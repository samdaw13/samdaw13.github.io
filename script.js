"use strict";
const url = "//samdaw13.github.io/info.json";
var earlyVictories = "earlyAxisVictories";
var rowOne = document.getElementById('first-row');
var rowTwo = document.getElementById('second-row');
var rowThree = document.getElementById('third-row');
var rowFour = document.getElementById('fourth-row');
var site1 = 0;
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
            var picture = document.createElement('picture');
            var source1 = document.createElement('source');
            var source2 = document.createElement('source');
            var source3 = document.createElement('source');
            var image = document.createElement('img');
            var anchor = document.createElement('a');
            var anchor1 = document.createElement('a');
            var listItem = document.createElement('li');

            //set all the attributes
            anchor.setAttribute('href', '#');
            anchor1.setAttribute('href', '#');
            source1.setAttribute('srcset', person.imageSmall + ', 400w');
            source1.setAttribute('media', '(max-width: 400px)');
            source2.setAttribute('srcset', person.image + ', 800w');
            source2.setAttribute('media', '(max-width: 800px)');
            source3.setAttribute('srcset', person.imageLarge + ', 1600w');
            source3.setAttribute('media', '(max-width: 1600px)');
            image.setAttribute('src', person.image);
            anchor1.innerHTML = person.name;

            //append the children
            picture.appendChild(source1);
            picture.appendChild(source2);
            picture.appendChild(source3);
            picture.appendChild(image);
            anchor.appendChild(picture);
            anchor.appendChild(rowOne);
            listItem.appendChild(anchor1);
            rowTwo.appendChild(listItem);

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
        dictators.forEach(function (person) {
            var tableData1 = document.createElement('td');
            var anchor = document.createElement('a');
            anchor.setAttribute('href', '#');
            anchor.innerHTML = person.name;
            tableData1.appendChild(anchor);

            secondRow.appendChild(tableData1);
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
function getBattlesSiteTwo(url){
    getJSON(url).then(function (data){
        console.log(data);
        var earlyBattles = data.turnOfTheTide;
        for(var i = 0; i < earlyBattles.length/2; i++){
            createElements(earlyBattles[i], rowOne, rowTwo);
        }
        for(var i = earlyBattles.length/2; i < earlyBattles.length; i++){
            createElements(earlyBattles[i], rowThree, rowFour);
        }
    });
}
function getBattlesSiteThree(url){
    getJSON(url).then(function (data){
        console.log(data);
        var earlyBattles = data.alliedOffensive;
        for(var i = 0; i < earlyBattles.length/2; i++){
            createElements(earlyBattles[i], rowOne, rowTwo);
        }
        for(var i = earlyBattles.length/2; i < earlyBattles.length; i++){
            createElements(earlyBattles[i], rowThree, rowFour);
        }
    });
}
function getBattlesSiteFour(url){
    getJSON(url).then(function (data){
        console.log(data);
        var earlyBattles = data.defeatOfAxis;
        for(var i = 0; i < earlyBattles.length/2; i++){
            createElements(earlyBattles[i], rowOne, rowTwo);
        }
        for(var i = earlyBattles.length/2; i < earlyBattles.length; i++){
            createElements(earlyBattles[i], rowThree, rowFour);
        }
    });
}
function createElements(battle, row1, row2){
    var image = document.createElement('img');
    image.setAttribute('src', battle.image);
    var tableRowOne = document.createElement('td');
    var anchor = document.createElement('a');
    anchor.setAttribute("href", "#");
    anchor.appendChild(image);
    tableRowOne.appendChild(anchor);
    row1.appendChild(tableRowOne);
    anchor.addEventListener('click', function (event) {
        addBattles(battle);
    });
    var tableData5 = document.createElement('td');
    var anchor1 = document.createElement('a');
    anchor1.setAttribute('href', "#");
    anchor1.innerHTML = battle.battleName;
    tableData5.appendChild(anchor1);
    row2.appendChild(tableData5);
    anchor1.addEventListener('click', function (event) {
        addBattles(battle);
    });
}
function addBattles(page){
    event.preventDefault();
    document.getElementById('information').style.display = 'block';
    document.getElementById('operation-name').innerHTML = page.operationName;
    document.getElementById('axis-casualties').innerHTML = page.casualtiesAxis;
    document.getElementById('allied-casualties').innerHTML = page.casualtiesAllied;;
    document.getElementById('date-began').innerHTML = page.dateBegan;
    document.getElementById('date-ended').innerHTML = page.dateEnded;
    document.getElementById('victor').innerHTML = page.victor;
    document.getElementById('battle-description').innerHTML = page.description;
}
