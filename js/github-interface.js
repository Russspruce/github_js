var apiKey = "9d29f9c14006a3698d3d4d117f357dda8920cf09";
var getRepos = require('./../js/github.js').getRepos;

$(document).ready(function() {
  $('#githubSearch').click(function() {
    var username = $('#username').val();
    $('#username').val("");
    $.get('https://api.github.com/users/' + username + '?access_token=' + apiKey).then(function(response){
      $('.showGithub').text("" + username +" currently has: " + response.public_repos +" public repositories.");
    });
  });
});
