var apiKey = require('./../.env').apiKey;

exports.getRepos = function(){
}

  exports.getRepos.prototype.getAllRepos = function(username, displayFunction) {
    $.get('https://api.github.com/users/' + username + '?access_token=' + apiKey).then(function(response){
      displayFunction(username, response.public_repos );
    }).fail(function(error) {
  $('.showGithub').text(error.responseJSON.message);
    });
 };
