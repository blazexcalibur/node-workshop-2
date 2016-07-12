//NodeJS Workshop #2

var request = require('request');

function data(url, callback) {
    request(url, function(err, res) {
        if (err) {
            callback(err);
        }
        else {
            try {
                var parsed = JSON.parse(res.body);
                callback(null, parsed)
            }
            catch (err) {
                callback(err);
            }
        }
    })
}

function callback(err, res) {
        if (err) {
            console.log("if - you've got an error")
        }
        else {
            console.log(res)
            }
        }
 
data('https://maps.googleapis.com/maps/api/geocode/json?address=montreal', callback); 
