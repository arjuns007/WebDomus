/* preloader*/
$(window).on('load', function () {
    $('#status').delay(2000).fadeOut();
    $('#preloader').delay(2000).fadeOut();
});

/*team*/
$(document).ready(function () {
    $("#team-members").owlCarousel({
        items: 2,
        autoplay: true,
        smartSpeed: 400,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>']
    });
});

/*progress bars*/

$(function () {

    $("#progress-elements").waypoint(function () {
        $(".progress-bar").each(function () {
            $(this).animate({
                width: $(this).attr("aria-valuenow") + "%"
            }, 1000);
        })
        this.destroy();
    }, {
        offset: 'bottom-in-view'
    });
});

// RESPONSIVE TABS

$(function () {
    $("#services-tabs").responsiveTabs({
        animation: 'slide'
    });

});

/*Testimonial*/
$(document).ready(function () {
    $("#testimonial-slider").owlCarousel({
        items: 1,
        autoplay: false,
        smartSpeed: 400,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>']
    });
});

/*Counter*/

/*
$(function(){

    var countOptions = {
        useEasing: true,
        separator: ''
      }
      
      var count = new CountUp('MyNumber', 0, $('.counter'), 0, 5, countOptions)
      
      // start the counting and give it a callback when done
      count.start(function() {
      });{
        offset: 'bottom-in-view'
    }
    
})  
*/


$('.counter').scroll(function () {
    if ($(window).scrollTop() >= $(document).height() - $(window).height() - 10) {
        const counters = document.querySelectorAll('.counter');
        const speed = 100;
        
        counters.forEach(counter =>{
            const updateCount = () => {
                const target = +counter.getAttribute('data-target');
                const count = +counter.innerText;
        
                const inc = target / speed;
        
                if(count<target) {
                    counter.innerText = Math.ceil(count + inc);
                    setTimeout(updateCount, 1);
                }
                else {
                    count.innerText = target;
                }
            }
        
            updateCount();
        });
    }
 });


