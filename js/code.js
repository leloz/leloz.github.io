
var url ="https://api.github.com/users/leloz/repos?sort=created&per_page=5"

$(document).ready(function(){

  show();

});



function show(){

  $.get(url, function(response) {
    console.log(response)
      $.each(JSON.parse(response), function(i,repo){
    // $.each(response,function(i,repo){
      var d=new Date(repo.created_at)
      $('#result').append('Created at: '+formatDate(d)+'<a href="'+repo.html_url+'" target="_blank">' + repo.name + '</a><br>'); 
      $("date").append(response +'&nbsp;')

    })
  });
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
  var date = document.createTextNode("\u00A0");
}





