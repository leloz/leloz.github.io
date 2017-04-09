
var fav_url ="https://gh-pinned-repos.now.sh/?username=leloz"
var url ="https://api.github.com/users/leloz/repos?sort=created&per_page=5"

$(document).ready(function(){

  showFavorite();
  show();

});


function showFavorite(){
  $.get(fav_url, function(response) {
  	// console.log(response)
  	$.each(JSON.parse(response), function(i,repo){
    // $.each(response,function(i,repo){

      $('#five').append('<a href="https://github.com/leloz/'+repo.repo+'" target="_blank">' + repo.repo + '</a><br>'); 
      $("favorite").append(response +'&nbsp;')
    })
  })
};

function formatDate(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  return date.getMonth()+1 + "/" + date.getDate() + "/" + date.getFullYear() + "  " + strTime;
}







function show(){

  $.get(url, function(response) {
    $('#result').html('')
    $.each(response, function(i,repo){
    // $.each(response,function(i,repo){
      var d=new Date(repo.created_at)
      $('#result').append('<a href="'+repo.html_url+'" target="_blank">' + repo.name + '</a>'+' <br>Created at: '+formatDate(d)+'<br><br>'); 
      $("date").append(response +'&nbsp;')

    })
  });
};







