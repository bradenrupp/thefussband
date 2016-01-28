//GLOBALS
var isDLViewable = true;

//Document Ready
$(document).ready(function(){
          $("#show-music-btn").hide();
          $("#footerSlideContainer").hide();
          $('.play').hide();


$(function () {
  
 blueimp.Gallery([
        {
            title: 'The Fuss - The Knot',
            type: 'text/html',
            youtube: 'NM_smETOX3c',
            poster: 'images/two.jpg'
        },
        {
            title: 'The Fuss - Supression (Live)',
            type: 'text/html',
            youtube: 'Y8VOzHv0lFg',
            poster: 'images/one.jpg'
        }
    ], {
        container: '#blueimp-video-carousel',
        carousel: false
    });
});


//CONTROL Download view
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
   isDLViewable = false;
}

    // initialization - first element in playlist
    initAudio($('.playlist li:first-of-type'));

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

    // FOOTER 
  function footer() {
    var open = false;
    $('#footerSlideButton').click(function () {
      if(open === false) {
        $('#footerSlideContainer').show( "slow" );
        open = true;
      } else {
        $('#footerSlideContainer').hide("slow");
        open = false;
      }
    }); 
  };  

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


/* card flip */
$(".flip").click(function(){

  if ($(this).find(".card").hasClass("been-flipped")) {
    return false;
  }

  $(this).find(".card").toggleClass("flipped");

  $(".card").each(function() {
    if ( $( this ).hasClass( "been-flipped" )) {
      $( this ).removeClass("been-flipped");
      $( this ).toggleClass("flipped");
      return false;
    };

 });

  $(this).find(".card").addClass("been-flipped");
  return false; 
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

        $('.title').text(title);
        $('.player .artist').text(artist);
        $('.player .cover').css('background-image','url(images/' + cover+')');;

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

        $("#footerSlideContainer").show("slow");

        song.play();
        $("#musicstat").show();

        tracker.slider("option", "max", song.duration);

        $('.play').toggle();
        $('.pause').toggle();
    }

    function stopAudio() {
        song.pause();
        $("#musicstat").hide();

        $('.play').toggle();
        $('.pause').toggle();
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
        $(".fa-spinner").removeClass("fa-spinner fa-spin").addClass("fa-play-circle-o");

    });

    $(".fa-times").click(function() {
$("#videoModal").addClass("hidden");
});

       // forward click
    $('.fwd').click(function (e) {
        e.preventDefault();

        stopAudio();
        $(".fa-spinner").removeClass("fa-spinner fa-spin").addClass("fa-play-circle-o");

        var next = $('.playlist li.active').next();
        next.find(".fa-play-circle-o").addClass("fa-spinner fa-spin");

        if (next.length == 0) {
            next = $('.playlist li:first-child');
        }
        initAudio(next);
        playAudio();
    });

    // rewind click
    $('.rew').click(function (e) {
        e.preventDefault();

        stopAudio();
        $(".fa-spinner").removeClass("fa-spinner fa-spin").addClass("fa-play-circle-o");

        var prev = $('.playlist li.active').prev();
        prev.find(".fa-play-circle-o").addClass("fa-spinner fa-spin");
        if (prev.length == 0) {
            prev = $('.playlist li:last-child');
        }
        initAudio(prev);
        playAudio();
    });

        // show playlist
    $('.pl').click(function (e) {
        e.preventDefault();
        $('.playlist').removeClass('hidden').fadeIn(300);
    });

    $('.fa-arrow-circle-down').click(function () {
      $("#footerSlideContainer").hide("slow");
      $("#show-music-btn").show("slow");

    });

     $('.fa-arrow-circle-up').click(function () {
        $("#footerSlideContainer").show("slow");
        $("#show-music-btn").hide("slow");
    });


    // playlist elements - click
    $('.playlist li').click(function () {
      $(".fa-spinner").removeClass("fa-spinner fa-spin").addClass("fa-play-circle-o");
        $(this).find('.fa-play-circle-o').removeClass("fa-play-circle-o").addClass("fa-spinner fa-spin");
        stopAudio();
        initAudio($(this));
        playAudio();
    });


  //AUDIO PLAYER END




