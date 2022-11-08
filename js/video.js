var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.querySelector("#player1")
	video.autoplay = false;
	video.loop = false;
	console.log("Auto play is set to "+video.autoplay)
	console.log("Loop is set to"+video.autoplay)
});

document.querySelector("#play").addEventListener("click", function() { 
	console.log("Play Video");
	document.querySelector("#volume").innerHTML= video.volume *100 + "%"
	video.play()
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	var video = document.querySelector("#player1")
	video.pause()
});

document.querySelector("#slower").addEventListener("click", function () {
	console.log("Slow down video");
	video.playbackRate*=.90
	console.log("Speed is", video.playbackRate())
});

document.querySelector("#faster").addEventListener("click", function(){
	console.log("Speed Up");
	video.playbackRate /= 0.9;
	console.log("Speed is" + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function(){
	console.log("Skip Ahead");
	video.currentTime += 10;
	if (video.currentTime >= video.duration){
		video.currentTime = 0;
	}
	console.log("Video current time is" + video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function(){
	if (video.muted) {
		video.muted = false
		document.querySelector("#mute").innerHTML = "Mute"
		console.log ("Unmute Video")
	} 
	else {
		video.muted = true
		document.querySelector("#mute").innerHTML = "Unmute"
		console.log("Mute Video")
	}
});

document.querySelector("#slider").addEventListener("click", function(){
	console.log("The current volume is" + video.volume);
	video.volume = this.value / 100;
	console.log("The current volume is" + video.volume);
	document.querySelector('#volume').innerHTML = video.volume * 100 + "%";
});

document.querySelector("#vintage").addEventListener("click", function(){
	video.classList.add("oldSchool");
	console.log("Add oldSchool Class");
});

document.querySelector("#orig").addEventListener("click", function(){
	video.classList.remove("oldSchool");
	console.log("Remove oldSchool Class");
});