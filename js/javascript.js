$(document).ready(function(){

$('[data-toggle="tooltip"]').tooltip(); 

//CONTROL Download view
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
   isDLViewable = false;
}

    // initialization - first element in playlist
    initAudio($('.playlist1:first li:first-of-type'));

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

        $('.songtitle').text(title);
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

        $('.play').hide();
        $('.pause').show();
        $(".last-played").removeClass("fa-play-circle-o .last-played").addClass("fa-spinner fa-spin");
    }

    function stopAudio() {
        song.pause();
        $("#musicstat").hide();

        $('.play').show();
        $('.pause').hide();
        $(".fa-spinner").removeClass("fa-spinner fa-spin").addClass("fa-play-circle-o last-played");
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

    $(".vidclose").click(function() {
      $("#videoModal").addClass("hidden");
    });
    
    $(".fa-video-camera").click(function() {
      $(function () {
     blueimp.Gallery([
     {
      title: 'The Fuss - Becoming The Worm',
      type: 'text/html',
      youtube: 'ea82ZUfbePw',
      poster: 'images/videoHeading.png'
    },
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
    });

       // forward click
    $('.fwd').click(function (e) {
        e.preventDefault();

        stopAudio();
        $(".last-played").removeClass("last-played");
        $(".fa-spinner").removeClass("fa-spinner fa-spin").addClass("fa-play-circle-o");

        var next = $('.playlist li.active').next();
        next.find(".fa-play-circle-o").addClass("fa-spinner fa-spin");

        if (next.length == 0) {
          var elem = $('.playlist li.active');
          if (elem.text() == " Riley" ) {
            next = $('.playlist2 li:first-child');
           next.find(".fa-play-circle-o").addClass("fa-spinner fa-spin");
          } else if (elem.text() == ' GooseStep' ) {
            next = $('.playlist3 li:first-child');
            next.find(".fa-play-circle-o").addClass("fa-spinner fa-spin");
          } else {
            next = $('.playlist1 li:first-child');
           next.find(".fa-play-circle-o").addClass("fa-spinner fa-spin");
          }
        }

        initAudio(next);
        playAudio();
    });

    // rewind click
    $('.rew').click(function (e) {
        e.preventDefault();

        stopAudio();
        $(".last-played").removeClass("last-played");
        $(".fa-spinner").removeClass("fa-spinner fa-spin").addClass("fa-play-circle-o");

        var prev = $('.playlist li.active').prev();
        prev.find(".fa-play-circle-o").addClass("fa-spinner fa-spin");
        if (prev.length == 0) {
          var elem = $('.playlist li.active');
          if (elem.text() == ' Attention' ) {
            prev = $('.playlist3 li:last-child');
            prev.find(".fa-play-circle-o").addClass("fa-spinner fa-spin");
          } else if (elem.text() == ' Glow' ) {
            prev = $('.playlist1 li:last-child');
            prev.find(".fa-play-circle-o").addClass("fa-spinner fa-spin");
          } else {
            prev = $('.playlist2 li:last-child');
            prev.find(".fa-play-circle-o").addClass("fa-spinner fa-spin");
          }
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
      $('.fa-arrow-circle-up').show();
    });

     $('.fa-arrow-circle-up').click(function () {
        $("#footerSlideContainer").show("slow");
        $("#show-music-btn").hide("slow");
    });


    // playlist elements - click
    $('.playlist li').click(function () {
      $(".last-played").removeClass("last-played");
      $(".fa-spinner").removeClass("fa-spinner fa-spin").addClass("fa-play-circle-o");
        $(this).find('.fa-play-circle-o').removeClass("fa-play-circle-o").addClass("fa-spinner fa-spin");
        stopAudio();
        initAudio($(this));
        playAudio();

        $('.fa-arrow-circle-up').hide();
        $('.play').hide();
        $('.pause').show();
    });

  //AUDIO PLAYER END




