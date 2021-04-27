const Twit = require('twit');
const config = require('./config');

const T = new Twit(config);

let keywords = ['#writing', '#writingjobs'];

const likeStream = T.stream('statuses/filter', { track: keywords });
//const retweetStream = T.stream('statuses/filter', { follow: accountsToFollow });

likeStream.on('tweet', (tweet) => {
  console.log(tweet);
});
