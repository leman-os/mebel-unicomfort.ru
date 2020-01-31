$(document).ready(function() {

    $('.reviwe-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        infinite: true,
    });


    $('.catalog li').hover(function(){
        $(this).addClass('c-hover');

    },function(){
        $(this).removeClass('c-hover');

    })

    var p = $( ".container" );
    var offset = p.offset();

    $(window).scroll(function(){
        if ($(window).scrollTop() >= 1300) {
            $('.consultant').addClass('fixed-header');

            $('.fixed-header').css('right',offset.left)
        }
        else {
            $('.consultant').removeClass('fixed-header');
            $('.consultant').css('right','0')
        }
    });

    $(window).scroll(function(){
        if ($(window).scrollTop() >= 3100) {
            $('.consultant').removeClass('fixed-header');
        }

    });


    $(window).scroll(function(){
        if ($(window).scrollTop() >= 600) {
            $('.sidebar').addClass('fixed-header');

            $('.fixed-header').css('right',offset.left)
        }
        else {
            $('.sidebar').removeClass('fixed-header');
            $('.sidebar').css('right','0')
        }
    });

    $(window).scroll(function(){
        if ($(window).scrollTop() >= 25000) {
            $('.sidebar').removeClass('fixed-header');
            $('.sidebar').addClass('sidebar2');
        }else{
            $('.sidebar').removeClass('sidebar2');
        }

    });


    $('.toggle').click(function(){
        $('.header__top-menu').stop().slideToggle( "slow" );
    });
    $(window).resize(function() {
        if (window.innerWidth < 821) {
            $('.toggle').css('display', 'block');
            $('.header__top-menu').css('display', 'none');

        } else {
            $('.toggle').css('display', 'none');
            $('.header__top-menu').css('display', 'block');
        }

    });
    if (window.innerWidth < 821) {
        $('.toggle').css('display', 'block');
        $('.header__top-menu').css('display', 'none');

    } else {
        $('.toggle').css('display', 'none');
        $('.header__top-menu').css('display', 'block');
    }







    $('.cattog').click(function(){
        $('.catalog ul').stop().slideToggle( "slow" );
    });
    $(window).resize(function() {
        if (window.innerWidth < 821) {
            $('.cattog').css('display', 'block');
            $('.catalog ul').css('display', 'none');

        } else {
            $('.cattog').css('display', 'none');
            $('.catalog ul').css('display', 'block');
        }

    });
    if (window.innerWidth < 821) {
        $('.cattog').css('display', 'block');
        $('.catalog ul').css('display', 'none');

    } else {
        $('.cattog').css('display', 'none');
        $('.catalog ul').css('display', 'block');
    }







    $(window).scroll(function(){
        if ($(window).scrollTop() >= 350) {
            $('.sidebar22').addClass('fixed-header');

            $('.fixed-header').css('right',offset.left)
        }
        else {
            $('.sidebar22').removeClass('fixed-header');
            $('.sidebar22').css('right','0')
        }
    });

    $(window).scroll(function(){
        if ($(window).scrollTop() >= 1000) {
            $('.sidebar22').removeClass('fixed-header');
            $('.sidebar22').addClass('sidebar2');
        }else{
            $('.sidebar22').removeClass('sidebar2');
        }

    });


});


