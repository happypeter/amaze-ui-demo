function createDom() {
  var e = $("<div class='followers'></div><img class='avatar' />");
  $('.github-card').append(e);
}


function updateResume(data) {
  createDom();
  console.log(data.avatar_url);
  $('.github-card img.avatar').attr( "src", data.avatar_url);
  $('.github-card .followers').text(data.followers);
  $('.resume').show();
}
$.AMUI.progress.start();

  $.ajax({
    url: "https://api.github.com/users/happypeter"
  }).done(function(data) {
    console.log(data);
    updateResume(data);
    $.AMUI.progress.done();
  });
