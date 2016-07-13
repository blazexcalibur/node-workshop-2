//Synonyms/similar words/equivalent words/commensurate words/equivalent
var request = require('request');

//var thesaurusApiUrl = "http://words.bighugelabs.com/api/2/7e105d4d4688167e0f951b9f4320624b/word/json";

function Synonym(apiKey) {
    this.aKey = apiKey;
}

Synonym.prototype.getSynonyms = function getSym(word, callback) {
    request("http://words.bighugelabs.com/api/2/" + this.aKey + "/" + word + "/json", function(err, res) {
        if (err) {
            callback(err);
        }
        else {
            try{
            var obj = JSON.parse(res.body);
            
                if (obj.noun.syn) {
                    console.log("\n   Noun \n")
                    for (var i = 0; i < obj.noun.syn.length; i++) {
                        console.log(obj.noun.syn[i]);
                    }
                } 
                if (obj.verb.syn) {
                    console.log("\n   Verb \n")
                    for (var i = 0; i < obj.verb.syn.length; i++) {
                        console.log(obj.verb.syn[i]);
                    }
                }
                if (obj.adjective.syn) {
                    console.log("\n   Adjective \n")
                    for (var i = 0; i < obj.adjective.syn.length; i++) {
                        console.log(obj.verb.syn[i]);
                    }
                }
                if (obj.adverb.syn) {
                    console.log("\n   Adverb \n")
                    for (var i = 0; i < obj.adverb.syn.length; i++) {
                        console.log(obj.adverb.syn[i]);
                    }
                }
            } catch (err){
                callback(err)
            }
        }
    })
}

module.exports = {
    Synonym: Synonym,
}