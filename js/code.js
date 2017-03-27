
var url ="https://api.github.com/users/leloz/repos?sort=created&per_page=5"
$(document).ready(function(){

  clickButton();
  show(); 
});

function clickButton(){
  $("#button").click(function(e){

    $.get(url, function(data){
     console.log(data);
   })
  })
}

function show(){

  $.get(url, function(response) {
    $.each(response,function(i,repo){
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
}




// <script type="text/javascript>
  
// </script>











