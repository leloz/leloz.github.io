var url ="https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyAFyLmjiDWP2CGc7Po4CERQeHW5wyvpPUQ&channelId=UCsT0YIqwnpJCM-mx7-gSA4Q"

$(document).ready(function(){

	show();

});


function show(){
	$.get(url, function(response) {
		$('#result').html('');
		$.each(response.items, function(i,video){
			console.log(video);
			$('#result').append('<div class="row video"><div class="col-md-3"><a href="https://www.youtube.com/watch?v='+video.id.videoId+'" target="_blank"><img src="'+video.snippet.thumbnails.default.url+'"></a></div><div class="col-md-6">'+video.snippet.title+'</div></div>')

		})
	})
};