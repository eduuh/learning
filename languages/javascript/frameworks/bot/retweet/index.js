console.log('The bot is running');

const Twit = require('twit');

const config = require('./config');

const T = new Twit(config);

//number of method
//get () search? by hashtag , by location  , by user
//post() tweeting!
//stream() Let be connected. when something happens show me
// Special event triggers
var params = { q: 'Writing Jobs', count: 3 };

T.get('search/tweets', params, gotData);

function gotData(err, data, response) {
  var tweets = data.statuses;
  console.log(tweets);
  for (var i = 0; i < tweets.length; i++) {
    console.log(tweets[i].text);
  }
}
