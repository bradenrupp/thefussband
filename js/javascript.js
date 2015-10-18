//Document Ready

var isDLViewable = true;
var isFeedOn = false;
$(document).ready(function(){
	//Hide Contents

  $("#musicbuttons").hide();
  $( "#photos" ).hide();
  $( "#shows" ).hide();
  $( "#songlist" ).hide();
  $( "#player" ).hide();
  $( "#playertitle" ).hide();
  $( "#playerdownload" ).hide();
  $( "#instagramfeed" ).hide();


if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
   $( "#volume" ).hide();
   isDLViewable = false;

}



  $("#togglemusic").click(function(){
      $("#musicbuttons").fadeToggle();
      $("#player").fadeToggle();
      $("#playertitle").fadeToggle();
     if (isDLViewable) {
      $("#playerdownload").fadeToggle();
     }; 
      $( "#photos" ).hide();
      $( "#shows" ).hide();
      $( "#fu" ).css('color', '#e67e22')
  });

  $("#togglephotos").click(function(){
      $("#photos").fadeToggle();
      $( "#musicbuttons" ).hide();
      $( "#shows" ).hide();
      $("#player").hide();
      $("#playertitle").hide();
      if (isDLViewable) {
              $("#playerdownload").hide();
     }; 
      $("#playerdownload").hide();
      $( "#ss" ).css('color', '#9b59b6')

  });

  $("#toggleshows").click(function(){
      $("#shows").fadeToggle();
      $( "#musicbuttons" ).hide();
      $( "#photos" ).hide();
      if (isDLViewable) {
              $("#playerdownload").hide();
     };
      $( "#the" ).css('color', '#1abc9c')

  });
  $("#toggleinstagram").click(function(){
    if (!isFeedOn) {
      $( "#site" ).hide();
      $("#instagramfeed").fadeToggle();
      $( ".fa-instagram" ).css( "color", "black" );
      isFeedOn = true;
    };
      
  }); 

  $("#backtosite").click(function(){
      $( "#site" ).fadeToggle();
      $("#instagramfeed").hide();
      $( ".fa-instagram" ).css( "color", "white" );      
      isFeedOn = false;


  });




    // initialization - first element in playlist
    initAudio($('.playlist li:first-child'));

    // set volume
    song.volume = 0.8;

    // initialize the volume slider
    volume.slider({
        range: 'min',
        min: 1,
        max: 100,
        value: 80,
        start: function(event,ui) {},
        slide: function(event, ui) {
            song.volume = ui.value / 100;
        },
        stop: function(event,ui) {},
    });

    // empty tracker slider
    tracker.slider({
        range: 'min',
        min: 0, max: 10,
        start: function(event,ui) {},
        slide: function(event, ui) {
            song.currentTime = ui.value;
        },
        stop: function(event,ui) {}
    });

});


function scrollToAnchor(aid){
    var aTag = $("a[name='"+ aid +"']");
    $('html,body').animate({scrollTop: aTag.offset().top}, 1500);
}

$("#togglephotos").click(function() {
   scrollToAnchor('content');
});
$("#toggleshows").click(function() {
   scrollToAnchor('content');
});
$("#togglemusic").click(function() {
   scrollToAnchor('content');
});


// AUDIO PLAYER
  // inner variables
    var song;
    var tracker = $('.tracker');
    var volume = $('.volume');


      function initAudio(elem) {
        var url = elem.attr('audiourl');
        var title = elem.text();
        var cover = elem.attr('cover');
        var artist = elem.attr('artist');

        $('.player .title').text(title);
        $('.player .artist').text(artist);
        $('.player .cover').css('background-image','url(pics/' + cover+')');;

        song = new Audio('music/' + url);

        // timeupdate event listener
        song.addEventListener('timeupdate',function (){
            var curtime = parseInt(song.currentTime, 10);
            tracker.slider('value', curtime);
        });

        $('.playlist li').removeClass('active');
        elem.addClass('active');
    }
    function playAudio() {
        song.play();

        tracker.slider("option", "max", song.duration);

        $('.play').addClass('hidden');
        $('.pause').addClass('visible');
    }
    function stopAudio() {
        song.pause();

        $('.play').removeClass('hidden');
        $('.pause').removeClass('visible');
    }

     // play click
    $('.play').click(function (e) {
        e.preventDefault();

        playAudio();
    });

    // pause click
    $('.pause').click(function (e) {
        e.preventDefault();

        stopAudio();
    });

       // forward click
    $('.fwd').click(function (e) {
        e.preventDefault();

        stopAudio();

        var next = $('.playlist li.active').next();
        if (next.length == 0) {
            next = $('.playlist li:first-child');
        }
        initAudio(next);
    });

    // rewind click
    $('.rew').click(function (e) {
        e.preventDefault();

        stopAudio();

        var prev = $('.playlist li.active').prev();
        if (prev.length == 0) {
            prev = $('.playlist li:last-child');
        }
        initAudio(prev);
    });

        // show playlist
    $('.pl').click(function (e) {
        e.preventDefault();

        $('.playlist').fadeIn(300);
    });

    // playlist elements - click
    $('.playlist li').click(function () {
        stopAudio();
        initAudio($(this));
    });


  //AUDIO PLAYER END

