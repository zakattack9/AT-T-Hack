"use strict"
const Spotify = require('node-spotify-api');

var spotify = new Spotify({
  id: '0627b9b3da1848fdbe4e7ee8a370f383',
  secret: '865c085203704c16b59f02662dc5da22',
});

spotify.search({ type: 'track', query: 'genre:rock', limit: 20 }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }

  for(var i = 0; i < data.tracks.items.length; i++){
    console.log(data.tracks.items[i].name)
    console.log(data.tracks.items[i].href)
    console.log('')
  };
});
