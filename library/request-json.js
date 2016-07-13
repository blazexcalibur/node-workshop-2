
var request = require('request');

function callback(err, res) {
        if (err) {
            console.log("if - you've got an error")
        }
        else {
            console.log(res)
            }
        }

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

module.exports = {
    data: data,
    callback: callback,
}