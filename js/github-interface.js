var apiKey = "9d29f9c14006a3698d3d4d117f357dda8920cf09";
var getRepos = require('./../js/github.js').getRepos;

$(document).ready(function() {
  var githubInfo = new getRepos();
  $('#showGithub').click(function() {
    var username = $('#username').val();
    $('#username').val("");
    githubInfo.getAllRepos(username, displayFunction);

  });
});
