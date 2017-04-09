
var url ="skills.json"
$(document).ready(function(){
	getSkills();
	showMySkills();
});



function getSkills(){

	$.get(url, function(response) {
		showMySkills(response)
	});
}

function showMySkills(json){
	json.skills.forEach(function(skill){
		$('#result').append(`${skill.title} <br> ${skill.description}<br><br><br>`)
	})
}
























