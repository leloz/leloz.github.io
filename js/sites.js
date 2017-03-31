
var url ="https://www.youtube.com/user/alxs1aa/playlists"
// var link = "https://www.youtube.com/user/alxs1aa/playlists";
$(document).ready(function(){

	clickButton();

	// $('a.new-window').click(function(){
	// 	window.open(this.href);
	// 	return false;
	// });

});


function clickButton(){
	$("#click").click(function(e){
		window.open(url, '_blank')
	});
}





