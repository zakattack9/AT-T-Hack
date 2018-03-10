var express = require('express'); // Express web server framework
var app = express();
app.use(express.static(__dirname + '/public'));
console.log('Listening on 8888');
app.listen(8888);

$(".music").click(function(){
    let client_id = '0627b9b3da1848fdbe4e7ee8a370f383'; // Your client id
    let client_secret = '865c085203704c16b59f02662dc5da22'; // Your secret

    let authOptions = {
      url: 'https://accounts.spotify.com/api/token',
      headers: {
      'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
      },
      form: {
        grant_type: 'client_credentials'
      },
      json: true
    };

    request.post(authOptions, function(error, response, body) {
      if (!error && response.statusCode === 200) {

      // use the access token to access the Spotify Web API
      let token = body.access_token;
      let options = {
        url: 'https://api.spotify.com/v1/users/jmperezperez',
        headers: {
          'Authorization': 'Bearer ' + token
        },
        json: true
      };
      request.get(options, function(error, response, body) {
        console.log(body);
      });
    }
});
