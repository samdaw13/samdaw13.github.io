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

function getEarlyVictories(url) {
    getJSON(url).then(function (data) {
        var earlyBattles = data.earlyAxisVictories;
        var rowOne = document.getElementById('first-row');
        document.getElementById('second-row').innerHTML = "";
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

            var tableData5 = document.createElement('td');

            var anchor1 = document.createElement('a');
            anchor1.setAttribute('href', "#");

            anchor1.innerHTML = earlyBattles[i].battleName;
            tableData5.appendChild(anchor1);
            rowTwo.appendChild(tableData5);

            anchor1.addEventListener('click', function (event) {

                event.preventDefault();
                document.getElementById('information').style.display = 'block';
                document.getElementById('axis-casualties').innerHTML = earlyBattles[i].casualtiesAxis;

                document.getElementById('allied-casualties').innerHTML = earlyBattles[i].casualtiesAllied

                document.getElementById('date-began').innerHTML = earlyBattles[i].dateBegan

                document.getElementById('date-ended').innerHTML = earlyBattles[i].dateEnded

                document.getElementById('victor').innerHTML = earlyBattles[i].victor;

                document.getElementById('battle-description').innerHTML = earlyBattles[i].description;
            });

        }
        for(let i = 3; i < 6; i++){

            var tableData3 = document.createElement('td');

            var anchor1 = document.createElement('a');
            anchor1.setAttribute('href', "#");

            anchor1.innerHTML = earlyBattles[i].battleName;
            tableData3.appendChild(anchor1);
            rowFour.appendChild(tableData3);

            anchor1.addEventListener('click', function (event) {

                event.preventDefault();
                document.getElementById('information').style.display = 'block';
                document.getElementById('axis-casualties').innerHTML = earlyBattles[i].casualtiesAxis;

                document.getElementById('allied-casualties').innerHTML = earlyBattles[i].casualtiesAllied

                document.getElementById('date-began').innerHTML = earlyBattles[i].dateBegan

                document.getElementById('date-ended').innerHTML = earlyBattles[i].dateEnded

                document.getElementById('victor').innerHTML = earlyBattles[i].victor;

                document.getElementById('battle-description').innerHTML = earlyBattles[i].description;
            });

        }

    });

}
function turnOfTheTide(url){
    getJSON(url).then(function (data) {
        var turnOfTheTideBattles = data.turnOfTheTide;
        var rowFive = document.getElementById('fifth-row');
        var rowSix = document.getElementById('sixth-row');
        var rowSeven = document.getElementById('seventh-row');
        var rowEight = document.getElementById('eigth-row');
        for(var i = 0; i < 4; i++){
            var image = document.createElement('img');
            image.setAttribute('src', turnOfTheTideBattles[i].image);
            var tableRowFive = document.createElement('td');
            rowFive.appendChild(tableRowFive); tableRowFive.appendChild(image);

        }
        for(var i = 4; i < 8; i++){
            var image2 = document.createElement('img');
            image2.setAttribute('src', turnOfTheTideBattles[i].image);
            var tableRowSeven = document.createElement('td');
            tableRowSeven.appendChild(image2);
            rowSeven.appendChild(tableRowSeven);
        }
        for(let i = 0; i < 4; i++){

            var tableData4 = document.createElement('td');

            var anchor2 = document.createElement('a');
            anchor2.setAttribute('href', "#");


            anchor2.innerHTML = turnOfTheTideBattles[i].battleName;
            tableData4.appendChild(anchor2);
           rowSix.appendChild(tableData4);

            anchor2.addEventListener('click', function (event) {

                event.preventDefault();
                document.getElementById('information').style.display = 'block';
                document.getElementById('axis-casualties').innerHTML = turnOfTheTideBattles[i].casualtiesAxis;

                document.getElementById('allied-casualties').innerHTML = turnOfTheTideBattles[i].casualtiesAllied

                document.getElementById('date-began').innerHTML = turnOfTheTideBattles[i].dateBegan

                document.getElementById('date-ended').innerHTML = turnOfTheTideBattles[i].dateEnded

                document.getElementById('victor').innerHTML = turnOfTheTideBattles[i].victor;



                document.getElementById('battle-description').innerHTML = turnOfTheTideBattles[i].description;
            });

        }
        for(let i = 4; i < 8; i++){

            var tableData5 = document.createElement('td');

            var anchor1 = document.createElement('a');
            anchor1.setAttribute('href', "#");

            anchor1.innerHTML = turnOfTheTideBattles[i].battleName;
            tableData5.appendChild(anchor1);
            rowEight.appendChild(tableData5);

            anchor1.addEventListener('click', function (event) {

                event.preventDefault();
                document.getElementById('information').style.display = 'block';
                document.getElementById('axis-casualties').innerHTML = turnOfTheTideBattles[i].casualtiesAxis;

                document.getElementById('allied-casualties').innerHTML = turnOfTheTideBattles[i].casualtiesAllied

                document.getElementById('date-began').innerHTML = turnOfTheTideBattles[i].dateBegan

                document.getElementById('date-ended').innerHTML = turnOfTheTideBattles[i].dateEnded

                document.getElementById('victor').innerHTML = turnOfTheTideBattles[i].victor;



                document.getElementById('battle-description').innerHTML = turnOfTheTideBattles[i].description;
            });

        }

    });
}

function alliedOffensive(url){
    getJSON(url).then(function (data){
        var alliesOffensive = data.alliedOffensive;
        var rowNine = document.getElementById('ninth-row');
        var rowTen = document.getElementById('tenth-row');
        var rowEleven = document.getElementById('eleventh-row');
        var rowTwelve = document.getElementById('twelth-row');
        for(var i = 0; i < 3; i++){
            var image3 = document.createElement('img');
            image3.setAttribute('src', alliesOffensive[i].image);
            var tableRowNine = document.createElement('td');
            tableRowNine.appendChild(image3);
            rowNine.appendChild(tableRowNine);
        }
        for(var i = 3; i < 6; i++){
            var image4 = document.createElement('img');
            image4.setAttribute('src', alliesOffensive[i].image);
            var tableRowEleven = document.createElement('td');
            tableRowEleven.appendChild(image4);
            rowEleven.appendChild(tableRowEleven);
        }
        for(let i = 0; i < 3; i++){
            var tableDataTen = document.createElement('td');
            var anchor = document.createElement('a');
            anchor.setAttribute('href', '#');
            anchor.innerHTML = alliesOffensive[i].battleName;
            tableDataTen.appendChild(anchor);
            rowTen.appendChild(tableDataTen);
            anchor.addEventListener('click', function(event){
                event.preventDefault();
                document.getElementById('information').style.display = 'block';
                document.getElementById('operation-name').innerHTML = alliesOffensive[i].operationName;
                document.getElementById('axis-casualties').innerHTML = alliesOffensive[i].casualtiesAxis;
                document.getElementById('allied-casualties').innerHTML = alliesOffensive[i].casualtiesAllied;;
                document.getElementById('date-began').innerHTML = alliesOffensive[i].dateBegan;
                document.getElementById('date-ended').innerHTML = alliesOffensive[i].dateEnded;
                document.getElementById('victor').innerHTML = alliesOffensive[i].victor;
                document.getElementById('battle-description').innerHTML = alliesOffensive[i].description;
            });
        }
        for(let i = 3; i < 6; i++){
            var tableDataTwelve = document.createElement('td');
            var anchor = document.createElement('a');
            anchor.setAttribute('href', '#');
            anchor.innerHTML = alliesOffensive[i].battleName;
            tableDataTwelve.appendChild(anchor);
            rowTwelve.appendChild(tableDataTwelve);
            anchor.addEventListener('click', function(event){
                event.preventDefault();
                document.getElementById('information').style.display = 'block';
                document.getElementById('operation-name').innerHTML = alliesOffensive[i].operationName;
                document.getElementById('axis-casualties').innerHTML = alliesOffensive[i].casualtiesAxis;
                document.getElementById('allied-casualties').innerHTML = alliesOffensive[i].casualtiesAllied;;
                document.getElementById('date-began').innerHTML = alliesOffensive[i].dateBegan;
                document.getElementById('date-ended').innerHTML = alliesOffensive[i].dateEnded;
                document.getElementById('victor').innerHTML = alliesOffensive[i].victor;
                document.getElementById('battle-description').innerHTML = alliesOffensive[i].description;
            });
        }
    });
}
function defeatOfAxis(url){
    getJSON(url).then(function (data){
        var axisDefeat = data.defeatOfAxis;
        var rowThirteen = document.getElementById('thirteenth-row');
        var rowFourteen = document.getElementById('fourteenth-row');
        var rowFifteen = document.getElementById('fifteenth-row');
        var rowSixteen = document.getElementById('sixteenth-row');
        for(var i = 0; i < 4; i++){
            var image5 = document.createElement('img');
            image5.setAttribute('src', axisDefeat[i].image);
            var tableRowThirteen = document.createElement('td');
            tableRowThirteen.appendChild(image5);
            rowThirteen.appendChild(tableRowThirteen);
        }
        for(var i = 4; i < 8; i++){
            var image6 = document.createElement('img');
            image6.setAttribute('src', axisDefeat[i].image);
            var tableRowFifteen = document.createElement('td');
            tableRowFifteen.appendChild(image6);
            rowFifteen.appendChild(tableRowFifteen);
        }
        for(let i = 0; i < 4; i++){
            var tableDataFourteen = document.createElement('td');
            var anchor = document.createElement('a');
            anchor.setAttribute('href', '#');
            anchor.innerHTML = axisDefeat[i].battleName;
            tableDataFourteen.appendChild(anchor);
            rowFourteen.appendChild(tableDataFourteen);
            anchor.addEventListener('click', function(event){
                event.preventDefault();
                document.getElementById('information').style.display = 'block';
                document.getElementById('operation-name').innerHTML = axisDefeat[i].operationName;
                document.getElementById('axis-casualties').innerHTML = axisDefeat[i].casualtiesAxis;
                document.getElementById('allied-casualties').innerHTML = axisDefeat[i].casualtiesAllied;;
                document.getElementById('date-began').innerHTML = axisDefeat[i].dateBegan;
                document.getElementById('date-ended').innerHTML = axisDefeat[i].dateEnded;
                document.getElementById('victor').innerHTML = axisDefeat[i].victor;
                document.getElementById('battle-description').innerHTML = axisDefeat[i].description;
            });
        }
        for(let i = 4; i < 8; i++){
            var tableDataSixteen = document.createElement('td');
            var anchor = document.createElement('a');
            anchor.setAttribute('href', '#');
            anchor.innerHTML = axisDefeat[i].battleName;
            tableDataSixteen.appendChild(anchor);
            rowSixteen.appendChild(tableDataSixteen);
            anchor.addEventListener('click', function(event){
                event.preventDefault();
                document.getElementById('information').style.display = 'block';
                document.getElementById('operation-name').innerHTML = axisDefeat[i].operationName;
                document.getElementById('axis-casualties').innerHTML = axisDefeat[i].casualtiesAxis;
                document.getElementById('allied-casualties').innerHTML = axisDefeat[i].casualtiesAllied;;
                document.getElementById('date-began').innerHTML = axisDefeat[i].dateBegan;
                document.getElementById('date-ended').innerHTML = axisDefeat[i].dateEnded;
                document.getElementById('victor').innerHTML = axisDefeat[i].victor;
                document.getElementById('battle-description').innerHTML = axisDefeat[i].description;
            });
        }
    });
}
var url = "//samdaw13.github.io/info.json";








