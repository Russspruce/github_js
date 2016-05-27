var getRepos = require('./../js/github.js').getRepos;
var displayRepos = function(username, githubRepos) {
  $('.showGithub').text(""+username+" currently has "+githubRepos+" repositories in their account.");
}

$(document).ready(function() {
  var githubInfo = new getRepos();
  $('#githubSearch').click(function() {
    debugger;
    var username = $('#username').val();
    $('#username').val("");
    githubInfo.getAllRepos(username, displayRepos);

  });
});
