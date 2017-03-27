
var url ="https://api.github.com/users/leloz/repos?sort=created&per_page=5"
$(document).ready(function(){

  clickButton();
 
});

function clickButton(){
  $("#button").click(function(e){

    $.get(url, function(data){
     console.log(data);
   })
  })
}


