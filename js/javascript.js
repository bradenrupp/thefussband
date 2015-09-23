//Document Ready
$(document).ready(function(){
	//Hide Contents
  $("#musicbuttons").hide();
  $( "#members" ).hide();
  $( "#shows" ).hide();
  $( "#songlist" ).hide();


  $("#togglemusic").click(function(){
      $("#musicbuttons").fadeToggle();
      $( "#members" ).hide();
      $( "#shows" ).hide();
  });

  $("#togglemembers").click(function(){
      $("#members").fadeToggle();
      $( "#musicbuttons" ).hide();
      $( "#shows" ).hide();
  });

  $("#toggleshows").click(function(){
      $("#shows").fadeToggle();
      $( "#musicbuttons" ).hide();
      $( "#members" ).hide();
  });

});


function scrollToAnchor(aid){
    var aTag = $("a[name='"+ aid +"']");
    $('html,body').animate({scrollTop: aTag.offset().top}, 1500);
}

$("#togglemembers").click(function() {
   scrollToAnchor('content');
});
$("#toggleshows").click(function() {
   scrollToAnchor('content');
});
$("#togglemusic").click(function() {
   scrollToAnchor('content');
});


// AUDIO PLAYER

var audioElement = $("#myTune");
var currentSongs = ["#attention", "#ghost", "#riley"];
var songId = 0;

$(".button-pause").on("click", function() {
    $(".button-pause").blur();
    $(".button-pause").addClass("active");
    $(".button-play").removeClass("active");
    audioElement[songId].pause();
  });

  $(".button-play").on("click", function() { 
    $(".button-play").blur();
    $(".button-play").addClass("active");
    $(".button-pause").removeClass("active");
    showCurrentSong(currentSongs[songId]);
    audioElement[songId].play();
  });

  $(".button-stop").on("click", function() {
    $(".button-stop").blur();
    $(".button-play").removeClass("active");
    $(".button-pause").removeClass("active");
    audioElement[songId].pause();
    audioElement[songId].currentTime = 0;
  });

  $(".button-skip-forward").on("click", function() {
    $(".button-skip-fastword").blur();
    audioElement[songId].pause();
    audioElement[songId].currentTime = 0;
    songId += 1;
    audioElement[songId].play();
  });

  $(".button-skip-backward").on("click", function() {
    $(".button-skip-backward").blur();
    audioElement[songId].pause();
    audioElement[songId].currentTime = 0;
    songId -= 1;
    audioElement[songId].play();
  });

  function showCurrentSong(currentSong) {
        $( "#songlist" ).show();
        $(currentSong).css("color", "#e67e22");
  };

  //AUDIO PLAYER END