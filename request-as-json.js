//NodeJS Workshop #2

//var request = require('request');
var fetchUrl = require('./library/request-json.js').data;


function callback(err, res) {
        if (err) {
            console.log("if - you've got an error")
        }
        else {
            console.log(res)
            }
        }
 
fetchUrl('https://maps.googleapis.com/maps/api/geocode/json?address=montreal', callback); 
