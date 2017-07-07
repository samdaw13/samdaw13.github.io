// Current Location Scripts
(function () {

    var status = document.getElementById('status');

    (function getGeoLocation() {
        status.innerHTML = 'Getting Location...';
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                var lat = position.coords.latitude;
                var long = position.coords.longitude;

                // Call the getData function, send the lat and long
                getData(lat, long);

            });
        } else {
            status.text("Your browser doesn't support Geolocation or it is not enabled!");
        }

    }());

    function getJSON(url) {
        return fetch(url)
            .then(function (response) {
                return response.json();
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    // Get the data from the wunderground API
    function getData(lat, long) {
        var url = "http://api.wunderground.com/api/5a47267e56a71868/conditions/q/" + lat + "," + long+ ".json";
        getJSON(url).then(function (data) {
            console.log(data);

            //add the code necessary here to update the page with all of the correct data points.
            var cityDisplay = document.getElementById('cityDisplay');
            cityDisplay.innerHTML = data.current_observation.display_location.full;

            document.title =  data.current_observation.display_location.full + " | Weather Home";

            var currentTempId = document.getElementById('currentTemp');

            var currentTemp = data.current_observation.temp_f;

            var roundedCurrentTemp = Math.floor(Math.round(currentTemp * 100) / 100);

            currentTempId.innerHTML = roundedCurrentTemp + "&#176;";

            document.getElementById('summary').innerHTML = data.current_observation.weather;


            document.getElementById('add1').innerHTML = "Feels like: " + data.current_observation.feelslike_string;
            document.getElementById('add2').innerHTML = "Humidty level: " + data.current_observation.relative_humidity;

            document.getElementById('add3').innerHTML = "Wind direction and Speed: " + data.current_observation.wind_string;
            //this line will cause the Loading message to fade away.
            document.getElementById("cover").classList.add('fadeout');

        });


    }

    // A function for changing a string to TitleCase
    function toTitleCase(str) {
        return str.replace(/\w+/g, function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    }
}());

