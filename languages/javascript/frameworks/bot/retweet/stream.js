const config = require('./config');
const Twit = require('twit');
console.log(config);
const T = new Twit(config);

//Setting up a user stream
var stream = T.stream('user');

stream.on('follow', followed);

tweetIt();

function followed(eventMsg) {
  console.log('Followed Event');
  var name = event.source.name;
  var screenName = eventMsg.source.screen_name;
  tweetIt('@' + screenName + ' Thanks for the follow');
}

function tweetIt(txt) {
  var tweet = {
    status: txt,
  };

  T.post('statuses/update', tweet, tweeted);

  function tweeted(err, data, response) {
    console.log('Tweeting functions');
    if (err) {
      console.log('Something went Wrong!');
    } else {
      console.log('It worked');
    }
  }
}

