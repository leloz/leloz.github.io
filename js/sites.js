
 url ="https://www.youtube.com/user/alxs1aa/playlists"
 // ="http://www.ted.com/talks"
$(document).ready(function(){

	clickButton();
	clickLink();

	$('a.new-window').click(function(){
		window.open(url.href);
		return false;
	});

});


function clickButton(){
	$("#click").click(function(e){
		window.open(url, '_blank')
	});
}

 

function clickLink(){
	$("#clicklink").click(function(e){
		window.open("http://www.ted.com/talks", '_blank')
	});
}




