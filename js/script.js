$(window).on("load", function(){

    $(".loader .inner").fadeOut(750, function(){
        $(".loader").fadeOut(950);
    });
})

$(document).ready(function(){
    $('#slides').superslides({
        animation: 'fade',
        play: 5000,
        pagination:false
    });
    
    var typed =new Typed(".typed",{
        strings: ["Mechatronics Engineer","Mean Stack Developer","Student"],
        typeSpeed: 70,
        loop: true,
        startDelay:1000,
        showCursor:false
    });
    $('.owl-carousel').owlCarousel({
        loop:true, 
        items:4,
        responsive:{
            0:{
                items:1
            },
            480:{
                items:2
            },
            768:{
                items:3
            },
            938:{
                items:4
            }
        }
    })

    var skillsTopOffset = $(".skillSection").offset().top;

    $(window).scroll(function(){

        if(window.pageYOffset > skillsTopOffset - $(window).height()+ 200 ){

            $('.chart').easyPieChart({
                easing: 'easeInOut',
                barColor: '#fff',
                trackColor: false,
                scaleColor:false,
                linewidth: 4,
                size:152,
                onStep: function(from,to,percent){
                    $(this.el).find('percent').text(Math.round(percent));
                }
            });
        }
    });

    const nav = $("#navigation");
    const navTop = nav.offset().top;

    $(window).on("scroll", stickyNavigation);

    function stickyNavigation(){
        
        var body = $("body");

        if($(window).scrollTop() >= navTop) {
            body.css("padding-top",nav.outerheight()= "px");
            body.addClass("fixedNav");
        }
        else{
            body.css("padding-top",0);
            body.removeClass("fixedNav");
        }
    }

});

