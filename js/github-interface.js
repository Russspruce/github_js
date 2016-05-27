var apiKey = "9d29f9c14006a3698d3d4d117f357dda8920cf09";

$(document).ready(function() {
  $('#githubSearch').click(function() {
    var username = ('#username').val();
    $('#username').val("");
    $('.showGithub').text("The repositories for " + username +" are:");
    $.get('')
  })
})
