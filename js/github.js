var apiKey = require('./../.env').apiKey;

exports.getRepos = function(){

  exports.getRepos.prototype.getAllRepos = function(username) {
    $.get('https://api.github.com/users/' + username + '?access_token=' + apiKey).then(function(response){
      $('.showGithub').text("" + username +" currently has: " + response.public_repos +" public repositories.");
    });
};
};
