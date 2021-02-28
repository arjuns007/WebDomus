/* preloader*/
$(window).on('load', function(){
    $('#status').delay(2000).fadeOut();
    $('#preloader').delay(2000).fadeOut();
});

/*team*/
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items : 2,
        autoplay : true,
        smartSpeed : 400,
        loop: true,
        autoplayHoverPause : true,
        nav : true,
        dots : false, 
        navText : ['<i class="fas fa-angle-left"></i>' , '<i class="fas fa-angle-right"></i>']
    });
  });

  /*progress bars*/

$(function(){

    $("#progress-elements").waypoint(function() {
        $(".progress-bar").each(function(){
            $(this).animate({
                width: $(this).attr("aria-valuenow") +"%"
            }, 1000);
        })
        this.destroy();
    }, {
        offset:'bottom-in-view' 
    });
});
