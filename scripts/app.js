var request = require('request');

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
    let client_id = '0627b9b3da1848fdbe4e7ee8a370f383'; // Your client id
    let client_secret = '865c085203704c16b59f02662dc5da22'; // Your secret
    let redirect_uri = 'http://127.0.0.1:8000/'; // Your redirect uri
    let scope = 'playlist-read-private user-read-private user-read-email';
    let url = 'https://accounts.spotify.com/authorize';
    url += '&response_type=' + encodeURIComponent(token);
    url += '&client_id=' + encodeURIComponent(client_id);
    url += '&client_secret=' + encodeURIComponent(client_secret);
    url += '&scope=' + encodeURIComponent(scope);
    url += '&redirect_uri=' + encodeURIComponent(redirect_uri);
    window.location = url;
    console.log(window.location);
    $("#sched").get("https://api.spotify.com/v1/users/dylan$$$$$$$/playlists/37i9dQZF1DX0s5kDXi1oC5/tracks", function(responseTxt, statusTxt, xhr){
        if(statusTxt == "success")
            alert("External content loaded successfully!");
        if(statusTxt == "error")
            alert("Error: " + xhr.status + ": " + xhr.statusText);
    });
    console.log(responseTxt);
});
