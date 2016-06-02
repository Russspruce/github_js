var getRepos = require('./../js/github.js').getRepos;
var displayRepos = function(username, profileData) {
  $('.showGithub').text(""+username+"'s github repositories currently on display: "+profileData+".");
}

$(document).ready(function() {
  var githubInfo = new getRepos();
  $('#githubSearch').click(function() {
    var username = $('#username').val();
    $('#username').val("");
    githubInfo.getAllRepos(username, displayRepos);

  });
});
