//In this project, I worked mostly with Hannah


//helper function to fetch the data from an external source
function getJSON(url) {
    return fetch(url)
        .then(function (response) {
            return response.json();
        })
        .catch(function (error) {
            console.log(error);
        });
}
//lets get some ships

function fetchShips(url) {

    //call getJSON function to get the list of ships from the api
    getJSON(url).then(function (data) {
        var results = data.results;
        var shipList = document.getElementById('ship-list');
        shipList.innerHTML = "";
        results.forEach(function (ship) {
            var listItem = document.createElement('li');
            var anchor = document.createElement('a');
            anchor.setAttribute('href', 'ship.url');

            anchor.innerHTML = ship.name;
            listItem.appendChild(anchor);
            shipList.appendChild(listItem);
            anchor.addEventListener('click', function (event) {
                event.preventDefault();
                document.getElementById('details-of-ship').style.display = 'block';
                document.getElementById('name').innerHTML = ship.name;
                document.getElementById('model').innerHTML = ship.model;
                document.getElementById('manufactuerer').innerHTML = ship.manufacturer;
                document.getElementById('cost').innerHTML = ship.cost_in_credits;
                document.getElementById('length').innerHTML = ship.length;
                document.getElementById('max_atmosphering_speed').innerHTML = ship.max_atmosphering_speed;
                document.getElementById('crew').innerHTML = ship.crew;
                document.getElementById('passengers').innerHTML = ship.passengers;
                document.getElementById('cargo_capacity').innerHTML = ship.cargo_capacity;
                document.getElementById('consumables').innerHTML = ship.consumables;
                document.getElementById('hyperdrive_rating').innerHTML = ship.hyperdrive_rating;
                document.getElementById('MGLT').innerHTML = ship.MGLT;
                document.getElementById('starship_class').innerHTML = ship.starship_class;

            });
        });
        //stuff that should happen after the request is done.
        console.log(data);
    });
}

function previous() {
    getJSON(url).then(function (data) {
        if (data.previous != null) {
           url = data.previous; document.getElementById('warning').innerHTML = '';
            fetchShips(data.previous);
        }
        else{
            document.getElementById('warning').innerHTML =  "There is no previous page";
        }
    });
}

function next() {
    getJSON(url).then(function (data) {
        if (data.next != null) {
            url = data.next; document.getElementById('warning').innerHTML = '';
            fetchShips(data.next);
        }
        else{
            document.getElementById('warning').innerHTML =  "There is no next page";
        }
    });
}
var url = "//swapi.co/api/starships/";
fetchShips(url);
