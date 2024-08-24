$(document).ready(function() {

    // Clone the navigation menu into the sidebar
    $('nav').clone().appendTo('.side_bar');
    
    // Toggle sidebar menu on clicking the nav-icon
    $('#nav-icon').click(function(e){
        $('body').toggleClass('open');
    });
    
    // Handle clicks on sidebar links for dropdown functionality on small screens
    $('.side_bar ul li a').click(function(e) {
        if ($(window).width() < 768) {
            $(this).parent().find('.drop_down').slideToggle();
            $(this).parent().siblings().find('.drop_down').slideUp();
            $(this).parent().toggleClass("active");
            $(this).parent().siblings().removeClass("active");

            // Close the sidebar menu
            $('body').removeClass('open');
        }
    });

    // Smooth scrolling for anchor links
    $("a").click(function(e) {
        var targetDiv = $(this).attr('href');
        if ($(targetDiv).length) {
           
            $('html, body').animate({
                scrollTop: $(targetDiv).offset().top
            }, 2000);

            // Close the sidebar menu after clicking on a nav item
            if ($(window).width() < 768) {
                $('body').removeClass('open');
            }
        }
    });

    // Initialize the slick slider
    // $('.slider').slick({
    //     dots: true,
    //     arrows: false,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     autoplay: true,
    //     autoplaySpeed: 4000,
    // });
});
