var Synonym = require('./library/synonyms.js').Synonym;
var prompt = require('prompt');

var ak = "7e105d4d4688167e0f951b9f4320624b";

var word = new Synonym(ak);


prompt.get('word', function(err, answers) {
    if (err) {
        console.log('there was an error');
    } else {
        
    word.getSynonyms(answers.word, function(err, res){
        if(err){
            console.log(err);
        } else {
            console.log(res);
        }
    });
    }
})
