var Spotify = require('node-spotify-api');
 
var spotify = new Spotify({
  id: '0627b9b3da1848fdbe4e7ee8a370f383',
  secret: '865c085203704c16b59f02662dc5da22',
});
 
spotify.search({ type: 'track', query: 'All the Small Things', limit: 5 }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
 
console.log(data.tracks.items); 
});