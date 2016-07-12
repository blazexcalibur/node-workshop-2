//How is the weather?

var prompt = require('prompt');

var city = "";

prompt.get(['userCity'], function(err, answers) {
    if (err) {
        console.log('there was an error');
    }
    else {
         city = answers.userCity;
        var userUrl = "https://maps.googleapis.com/maps/api/geocode/json?address=" + city;

        var request = require('request');
        var userLat;
        var userLng;
        
        request(userUrl, function(err, response) {
            if (err) {
                console.log('there was an error');
            }
            else {
                var obj = JSON.parse(response.body);
                userLat = obj.results[0].geometry.location.lat;
                userLng = obj.results[0].geometry.location.lng;
                console.log(obj.results[0].geometry.location);
            }
        });
    }
})

