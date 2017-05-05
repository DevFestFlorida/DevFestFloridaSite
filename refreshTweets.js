const Twit = require('twit');

const T = new Twit({
    consumer_key:         'YOUR_CONSUMER_KEY',
    consumer_secret:      'YOUR_CONSUMER_SECRET',
    access_token:         'YOUR_ACCESS_TOKEN',
    access_token_secret:  'YOUR_ACCESS_TOKEN_SECRET',
    timeout_ms:           60*1000  // optional HTTP request timeout to apply to all requests.
});

T.get('search/tweets', { q: '#devfestFL since:2017-01-01', count: 10 }, function(err, data) {
    const fs = require('fs');
    fs.writeFile("app/data/tweets.json", JSON.stringify(data.statuses), function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    });
});
