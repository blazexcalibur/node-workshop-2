//How is the weather?

var prompt = require('prompt');
var fetchJson = require('./library/request-json.js').data;
var callback = require('./library/request-json.js').callback;

prompt.get(['userCity'], function(err, answers) {
    if (err) {
        console.log('there was an error');
    }
    else {
        var city = answers.userCity;
        var userUrl = "https://maps.googleapis.com/maps/api/geocode/json?address=" + city;

        var request = require('request');
        var userLat;
        var userLng;

        request(userUrl, function(err, response) {
            if (err) {
                console.log('there was an error');
            }
            else {
                var obj1 = JSON.parse(response.body);
                userLat = obj1.results[0].geometry.location.lat;
                userLng = obj1.results[0].geometry.location.lng;
                //console.log(obj.results[0].geometry.location);
                var currentTime = Date.now();

                var weatherUrlFiveDays = 'https://api.forecast.io/forecast/dddf05fd54b0ffc81b8a3adf721eb737/' + userLat + ',' + userLng;
                //console.log(weatherUrlFiveDays)
                var weatherUrlAtTime = 'https://api.forecast.io/forecast/dddf05fd54b0ffc81b8a3adf721eb737/' + userLat + ',' + userLng + ',' + currentTime;

                var dayCounter = 0;


                fetchJson(weatherUrlFiveDays, function(err, res) {
                    if (err) {
                        console.log('you\'ve got an error')
                    }
                    else {
                        var dayOfTheWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
                        console.log("The current weather is" + res.currently.summary + "\n" + "This weeks weather is the following:\n");

                        var dataDay = Date().split(" ")[0];
                        var day = 0;
                        switch (dataDay) {
                            case "Mon":
                                dataDay = "Monday";
                                day = 1;
                                break;
                            case "Tue":
                                dataDay = "Tuesday";
                                day = 2;
                                break;
                            case "Wed":
                                dataDay = "Wednesday";
                                day = 3;
                                break;
                            case "Thu":
                                dataDay = "Thursday";
                                day = 4;
                                break;
                            case "Fri":
                                dataDay = "Friday";
                                day = 5;
                                break;
                            case "Sat":
                                dataDay = "Saturday";
                                day = 6;
                            case "Sun":
                                dataDay = "Sunday";
                                day = 7;
                        }
                           for (var i = day; i < day; i++) {
                                console.log(i)
                                if (day === 7){
                                    i = 1;
                                }
                            }

                        function getJson() {
                            // var dataDay = new Date(res.daily.data[dayCounter].time).getDay();
                            if (dayCounter < 7) {
                                console.log(dayOfTheWeek[dataDay] + " : " + res.daily.data[dayCounter].summary);
                                dayCounter++;
                                return getJson();
                            }
                            else {
                                return;
                            }
                        }
                        getJson();
                    }
                });


            }
        });
    }
})
