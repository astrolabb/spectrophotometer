


$(document).ready(function() {
	var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', 'sound/bird1.wav');
   
    
    var audioElement2 = document.createElement('audio');
    audioElement2.setAttribute('src', 'sound/bird2.wav');
   
    
    var audioElement3 = document.createElement('audio');
    audioElement3.setAttribute('src', 'sound/bird3.wav');
    
	
	
	$( "#bird1" ).on("vclick", function(){
		setTimeout(function(){
			audioElement.play();
		}, $( "#slider_audio" ).val()*1000);
	});
	$( "#bird2" ).on("vclick", function(){
		setTimeout(function(){
			audioElement2.play();
		}, $( "#slider_audio" ).val()*1000);
	});
	$( "#bird3" ).click(function() {
		setTimeout(function(){
			audioElement3.play();
		}, $( "#slider_audio" ).val()*1000);
	});
});