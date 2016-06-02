var apiKey = require('./../.env').apiKey;

exports.getRepos = function(){
};

exports.getRepos.prototype.getAllRepos = function(username, displayFunction, page) {
  $.get('https://api.github.com/users/' + username + '/repos?page=' + page + '&per_page=100&access_token=' + apiKey).then(function(response){
    displayFunction(username, response.length, page);
    response.forEach(function(repo) {
      $('.showGithub').append("<h4>" + repo.name + "</h4>" +
                              "<div class='container'>" +
                              "<h5>Description: " + repo.description + "</h5>" +
                              "<h5>Created: "+ repo.created_at + "</h5>" +
                              "<h5>Updated: "+ repo.updated_at + "</h5>" +
                              "<h5>GH Pages: " + repo.has_pages + "</h5>" +
                              "</div> <br>"
                              );
    });
  }).fail(function(error) {
    $('.showGithub').text(error.responseJSON.message);
  });
};
