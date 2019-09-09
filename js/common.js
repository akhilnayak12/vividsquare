1/*
 Theme Name: Millennium - web agency html template
 Author: Oleko
 Version: 1.0
 Tags: agency, business, clean, creative, design, minimal, modern, portfolio, professional, psd, site, studio, template
 */

"use strict";

(function ($) {
    var header = $('header'),
        headerH = $('header.auto-hid'),
        bgVideo = $("#bgndVideo"),
        videoCompany = $('#video--company'),
        buttonPlayStatus = true,
        buttonMuteStatus = true,
        buttonStatus = true,
        companyBotton = $('#our_company--botton'),
        companyBottonSvg = $('#our_company--botton img'),
        buttonMute = $('.mute'),
        buttonMuteSvg = $('.mute img'),
        buttonPlay = $('.play'),
        buttonPlaySvg = $('.play img'),
        preloader = $('.preloader'),
        sliderTop = $('#owl-slider'),
        cliderCompany = $('#owl-our_company'),
        cliderLocation = $('#owl-location'),
        cliderReviews = $('#owl-reviews'),
        videoSliderBg = $('.video--bg'),
        sliderButton = $('.slider--slide__buttons'),
        companyVideo = $('.our_company--video');

    /*-------------------------------------
     Hide Header  scroll
     -------------------------------------*/

    function headerShow(widht) {
        if ($(window).width() > widht && headerH) {
            var lastScrollTop = 0;
            $(window).on('scroll', function () {
                var st = $(this).scrollTop();
                if (st < lastScrollTop) {
                    headerH.css('top', '0');
                }
                else {
                    headerH.css('top', '-100%')
                }
                lastScrollTop = st;
            });
        }
        else {
            return false
        }
    }

    /*-------------------------------------
     Circle rotate
     -------------------------------------*/

    $("#circle--rotate").circle();

    /*-------------------------------------
     YTPlayer slider
     -------------------------------------*/

    function videoYTPSlaider() {
        if (bgVideo.length) {
            bgVideo.YTPlayer();
            buttonMute.on('click', function () {
                if (buttonMuteStatus == true) {
                    bgVideo.YTPUnmute();
                    buttonMuteStatus = false;
                    buttonMuteSvg.toggle();
                }
                else {
                    bgVideo.YTPMute();
                    buttonMuteStatus = true;
                    buttonMuteSvg.toggle();
                }
            });
            buttonPlay.on('click', function () {
                if (buttonPlayStatus === true) {
                    bgVideo.YTPPause();
                    buttonPlayStatus = false;
                    buttonPlaySvg.toggle();
                }
                else {
                    bgVideo.YTPPlay();
                    buttonPlayStatus = true;
                    buttonPlaySvg.toggle();
                }
            });
        }
        else {
            return false
        }
    }

    /*-------------------------------------
     YTPlayer company
     -------------------------------------*/

    function videoYTPCompany() {
        if (videoCompany.length) {
            videoCompany.YTPlayer();
            companyBotton.on('click', function () {
                if (buttonStatus === true) {
                    videoCompany.YTPPlay();
                    buttonStatus = false;
                    companyBottonSvg.toggle();
                }
                else {
                    videoCompany.YTPPause();
                    buttonStatus = true;
                    companyBottonSvg.toggle();
                }
                $('#controlBar_video--company').css('opacity', '1')
            });
        }
        else {
            return false
        }
    }

    /*-------------------------------------
     Preloader
     -------------------------------------*/

    $(window).load(function () {
        if (preloader.length) {
            preloader.delay(600).fadeOut('slow');
        }
    });

    /*-------------------------------------
     * Mobile menu
     -------------------------------------*/

    if ('.menu-item-has-children') {
        $('.menu-item-has-children > a').after('<i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i>');
    }

    $(document).on('click', '.navTrigger', function () {
        $('.navTrigger').toggleClass('close');
        $('.hidden--menu.mobile').toggleClass('show--menu');
        $('.sub-menu').slideUp();
        $('.menu-item-has-children > i').removeClass('rotate--icon');
        $('.hidden--menu.mobile .menu').toggleClass('active');
        $('.header--fixed .logo').toggleClass('active');
    });

    $('.menu-item-has-children i').click(function () {
        var ths = $(this);
        ths.toggleClass('rotate--icon');
        ths.next().slideToggle();
    });

    /*-------------------------------------
     * Animate scroll
     -------------------------------------*/

    $.fn.animated = function (inEffect) {
        $(this).each(function () {
            var ths = $(this);
            ths.css('opacity', '0').addClass('animated')
                .waypoint(function (dir) {
                    if (dir === 'down') {
                        ths.addClass(inEffect).css('opacity', '1');
                    }
                    else {
                        ths.removeClass(inEffect).css('opacity', '0');
                    }
                }, {
                    offset: '95%'
                });
        });
    };

    /*-------------------------------------
     * Scroll design
     -------------------------------------*/

    // $('html').niceScroll({
    //     scrollspeed: 60,
    //     mousescrollstep: 45,
    //     cursorwidth: 10,
    //     cursorborder: 0,
    //     cursorcolor: '#998675',
    //     cursorborderradius: 2,
    //     autohidemode: false,
    //     horizrailenabled: false
    // });

    /*-------------------------------------
     * Slider scroll effect opacity
     -------------------------------------*/

    function opacityEffectBlock(element) {
        if (element.length) {
            $(window).scroll(function () {
                var heightBlock = element.height(),
                    elementTop = (element.offset()).top,
                    topScroll = $(this).scrollTop() - elementTop;
                if (($(this).scrollTop() >= elementTop) && ($(this).scrollTop() <= heightBlock + elementTop)) {
                    element.css('opacity', (1 - topScroll / heightBlock));
                }
            });
        }
        else {
            element.css('opacity', '1')
        }
    }

    /*-------------------------------------
     * Contact header click
     -------------------------------------*/

    $(document).on('click', '.country span', function () {
        var cont = $('.contacts__in p');
        $('.country span').removeClass('active');
        $(this).addClass('active');
        var countryStatus = $('.country span.active').index();
        cont.addClass('hidden');
        cont.eq(countryStatus).removeClass('hidden').addClass('show');
    });

    /*-------------------------------------
     * Animated slider
     -------------------------------------*/

    function nextslide() {
        if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) != true) {
            $('.slider--info__title').removeClass('animated fadeInUp');
            $('.slider--info__content').removeClass('animated fadeInUp');
            $('.slider--info__more').removeClass('animated fadeInUp');
            $('.owl-item.active .slider--info__title').animated('fadeInUp');
            $('.owl-item.active .slider--info__content').animated('fadeInUp');
            $('.owl-item.active .slider--info__more').animated('fadeInUp');
        }
        else{
            return false
        }
        buttonShow();
    }

    /*-------------------------------------
     * Owl slider header
     -------------------------------------*/

    if (sliderTop.length) {
        sliderTop.owlCarousel({
            items: 1,
            slideSpeed: 300,
            paginationSpeed: 400,
            navigation: false,
            // autoPlay: 10000,
            singleItem: true,
            afterAction: function () {
                this
                    .$owlItems
                    .removeClass('active');
                this
                    .$owlItems
                    .eq(this.currentItem)
                    .addClass('active')
            },
            beforeMove: nextslide,
            afterMove: nextslide
        });
    }

    /*-------------------------------------
     * Video button auto hide
     -------------------------------------*/

    function buttonShow() {
        var sliderButton = $('.slider--slide__buttons'),
            sliderImage = $('.owl-item.active .slider--slide img');
        if (sliderImage.length) {
            sliderButton.css('display', 'none');
        }
        else {
            sliderButton.css('display', 'block');
        }
    }

    /*-------------------------------------
     * Slider click icon mouse
     -------------------------------------*/

    $(document).on('click', '.slider--mouse', function () {
        var slideHeight = $('.slider--slide').height();
        $('html,body').animate({scrollTop: slideHeight}, 800)

    });

    /*-------------------------------------
     * Service Auto height circle
     -------------------------------------*/

    function autoHeightCircle() {
        var circle = $('.circle--rotate'),
            circleInner = $('.animate-wrapper'),
            circleH = circle.width(),
            circleInnerH = circleInner.width();
        circle.height(circleH);
        circleInner.height(circleInnerH);
    }

    /*-------------------------------------
     * Services parallax image
     -------------------------------------*/

    $(window).scroll(function () {
        if (jQuery(window).width() > 500) {
            var st = ($(this).scrollTop() / 200),
                st_scale = ($(this).scrollTop() / 70) + 100;

            $('.animate-img__in').css({
                "background-position": st + "% " + st + "%",
                "background-size": st_scale + "%" + st_scale + "%"
            });
        }
    });

    /*-------------------------------------
     * Slider our company
     -------------------------------------*/

    if (cliderCompany.length) {
        cliderCompany.owlCarousel({
            pagination: false,
            slideSpeed: 300,
            paginationSpeed: 400,
            singleItem: true,
            navigation: true,
            loop: true,
            autoPlay: 7000,
            navigationText: [
                "<span></span><i class='icon-left'></i>",
                "<span></span><i class='icon-right'></i>"
            ]
        })
    }

    /*-------------------------------------
     * Our company hover video
     -------------------------------------*/

    companyVideo.hover(
        function () {
            companyVideo.css('z-index', '20')

        },
        function () {
            companyVideo.css('z-index', '10');
        }
    );

    /*-------------------------------------
     * Slider location
     -------------------------------------*/

    if (cliderLocation.length) {
        cliderLocation.owlCarousel({
            pagination: false,
            slideSpeed: 300,
            paginationSpeed: 400,
            singleItem: true,
            navigation: true,
            loop: true,
            autoPlay: 7000,
            navigationText: [
                "<span></span><i class='icon-left'></i>",
                "<span></span><i class='icon-right'></i>"
            ]
        });
    }

    /*-------------------------------------
     * Portfolio click button filter
     -------------------------------------*/

    var filterButton = $('.portfolio-filter ul li'),
        portfolio = $('.portfolio-wrapper .portfolio');

    filterButton.click(function () {
        filterButton.removeClass('active');
        $(this).addClass('active');
        var liIndex = $(this).index();
        portfolio.removeClass('active');
        portfolio.eq(liIndex).addClass('active');
    });

    /*-------------------------------------
     * Background image
     -------------------------------------*/

    $('div').each(function () {
        var url = $(this).attr('data-image');
        if (url) {
            $(this).css('background-image', 'url(' + url + ')');
        }
    });

    $('section').each(function () {
        var url = $(this).attr('data-image');
        if (url) {
            $(this).css('background-image', 'url(' + url + ')');
        }
    });

    /*-------------------------------------
     * Slider reviews
     -------------------------------------*/

    if (cliderReviews.length > 0) {
        cliderReviews.owlCarousel({
            pagination: false,
            slideSpeed: 300,
            autoPlay: 7000,
            paginationSpeed: 400,
            singleItem: true,
            navigation: true,
            loop: true,
            afterAction: function () {
                this
                    .$owlItems
                    .removeClass('active');
                this
                    .$owlItems
                    .eq(this.currentItem)
                    .addClass('active')
            },
            navigationText: [
                "<span></span><i class='icon-left'></i>",
                "<span></span><i class='icon-right'></i>"
            ],
            beforeMove: pagination,
            afterMove: pagination
        });
    }

    /*-------------------------------------
     * Reviews pagination figures
     -------------------------------------*/

    function pagination() {
        var item = $('#owl-reviews').find('.owl-item.active'),
            numberItem = item.index() + 1,
            countItem = item.length + 1;
        $('#pagination').html('<span class=\"pagination\">' + numberItem + '/' + countItem);
    }

    /*-------------------------------------
     * Button back top
     -------------------------------------*/

    $('#back--top').click(function () {
        $('html,body').animate({scrollTop: 0}, 1800)
    });

    /*-------------------------------------
     * Auto height block content page
     -------------------------------------*/

    $(window).resize(function () {
        blockHeight();
    });
    function blockHeight() {
        if ($(window).width() > 768) {
            var imageHeaigt = $('.content--image').height();
            $('.content--text').css('height', imageHeaigt);
        }
        else {
            $('.content--text').css('height', 'auto');
        }
    }

    /*-------------------------------------
     * Mobile version
     -------------------------------------*/

    if (typeof $.fn.mb_YTPlayer !== 'undefined') {
        $(function () {
            if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                sliderButton.remove();
                videoSliderBg.remove();
                companyBotton.remove();
                videoCompany.remove();
            } else {
                videoYTPSlaider();
                videoYTPCompany();
                $('h3').animated('fadeInDown');
                $('section > p').animated('fadeInUp');
                $('.circle--slider').animated('fadeInUp');
                $('.portfolio-filter').animated('fadeInUp');
                $('.portfolio-wrapper').animated('fadeInUp');
                $('.our_company--video').animated('fadeInLeft');
                $('.our_company--slider').animated('fadeInRight');
                $('#owl-our_company').animated('fadeInUp');
                $('.discuss--left').animated('fadeInLeft');
                $('.discuss--right').animated('fadeInRight');
                $('.team__in').animated('fadeInUp');
                $('.reviews__in').animated('fadeInUp');
                $('.partners__in').animated('fadeInUp');
                $('.map').animated('fadeInUp');
                $('.footer--block').animated('fadeInUp');
                $('.footer--bottom').animated('fadeInUp');
                $('#back--top').animated('fadeInRightBig');
            }
        }());
    }

    /*-------------------------------------
     Contact Form Home Page Activation
     -------------------------------------*/

    $('#contact-form').submit(function () {
        var form = $(this);
        var error = false;
        if (!error) {
            var data = form.serialize();
            $.ajax({
                type: 'POST',
                url: 'php/form.php',
                dataType: 'json',
                data: data,
                beforeSend: function () {
                    form.find('input[type="submit"]').attr('disabled', 'disabled');
                    form.trigger('reset');
                },
                success: function (data) {
                    if (data['error']) {
                        alert(data['error']);
                    } else {
                        $('#success').slideToggle('slow');
                    }
                },
                error: function () {
                    $('#error').slideToggle('slow');
                },
                complete: function () {
                    form.find('input[type="submit"]').prop('disabled', false);
                }
            });
        }
        return false;
    });

    /*-------------------------------------
     Contact Form 2 Home Page Activation
     -------------------------------------*/

    $('#contact-form-2').submit(function () {
        var form = $(this);
        var error = false;
        if (!error) {
            var data = form.serialize();
            $.ajax({
                type: 'POST',
                url: 'php/form_2.php',
                dataType: 'json',
                data: data,
                beforeSend: function () {
                    form.find('input[type="submit"]').attr('disabled', 'disabled');
                    form.trigger('reset');
                },
                success: function (data) {
                    if (data['error']) {
                        alert(data['error']);
                    } else {
                        $('#success').slideToggle('slow');
                    }
                },
                error: function () {
                    $('#error').slideToggle('slow');
                },
                complete: function () {
                    form.find('input[type="submit"]').prop('disabled', false);
                }
            });
        }
        return false;
    });

    /*-------------------------------------
     Google maps API
     -------------------------------------*/

    // if (typeof $.fn.gmap3 !== 'undefined') {

    //     $("#map").each(function () {

    //         var data_zoom = 15,
    //             data_height;

    //         if ($(this).attr("data-zoom") !== undefined) {
    //             data_zoom = parseInt($(this).attr("data-zoom"), 10);
    //         }
    //         if ($(this).attr("data-height") !== undefined) {
    //             data_height = parseInt($(this).attr("data-height"), 10);
    //         }

    //         $(this).gmap3({
    //             marker: {
    //                 values: [{
    //                     address: $(this).attr("data-address"),
    //                     data: $(this).attr("data-address-details")
    //                 }],
    //                 options: {
    //                     draggable: false,
    //                     icon: "img/map-marker.svg"
    //                 },
    //                 events: {
    //                     mouseover: function (marker, event, context) {
    //                         var map = $(this).gmap3("get"),
    //                             infowindow = $(this).gmap3({get: {name: "infowindow"}});
    //                         if (infowindow) {
    //                             infowindow.open(map, marker);
    //                             infowindow.setContent(context.data);
    //                         } else {
    //                             $(this).gmap3({
    //                                 infowindow: {
    //                                     anchor: marker,
    //                                     options: {content: context.data}
    //                                 }
    //                             });
    //                         }
    //                     },
    //                     mouseout: function () {
    //                         var infowindow = $(this).gmap3({get: {name: "infowindow"}});
    //                         if (infowindow) {
    //                             infowindow.close();
    //                         }
    //                     }
    //                 }
    //             },
    //             map: {
    //                 options: {
    //                     mapTypeId: google.maps.MapTypeId.ROADMAP,
    //                     zoom: data_zoom,
    //                     scrollwheel: false,
    //                     styles: [{
    //                         "featureType": "administrative.country",
    //                         "elementType": "geometry.fill",
    //                         "stylers": [{"weight": "5.83"}]
    //                     }, {
    //                         "featureType": "administrative.province",
    //                         "elementType": "geometry.fill",
    //                         "stylers": [{"color": "#ff0000"}, {"visibility": "on"}]
    //                     }, {
    //                         "featureType": "administrative.locality",
    //                         "elementType": "geometry.fill",
    //                         "stylers": [{"color": "#ff0000"}, {"visibility": "on"}]
    //                     }, {
    //                         "featureType": "administrative.locality",
    //                         "elementType": "labels.text",
    //                         "stylers": [{"visibility": "on"}]
    //                     }, {
    //                         "featureType": "administrative.locality",
    //                         "elementType": "labels.text.fill",
    //                         "stylers": [{"color": "#888686"}]
    //                     }, {
    //                         "featureType": "administrative.neighborhood",
    //                         "elementType": "geometry.fill",
    //                         "stylers": [{"color": "#ff0000"}, {"visibility": "on"}]
    //                     }, {
    //                         "featureType": "administrative.neighborhood",
    //                         "elementType": "labels.text.fill",
    //                         "stylers": [{"color": "#888686"}]
    //                     }, {
    //                         "featureType": "administrative.land_parcel",
    //                         "elementType": "geometry.fill",
    //                         "stylers": [{"visibility": "on"}]
    //                     }, {
    //                         "featureType": "landscape",
    //                         "elementType": "geometry.fill",
    //                         "stylers": [{"visibility": "on"}, {"color": "#e6e6e6"}]
    //                     }, {
    //                         "featureType": "poi",
    //                         "elementType": "geometry.fill",
    //                         "stylers": [{"visibility": "off"}]
    //                     }, {
    //                         "featureType": "poi.business",
    //                         "elementType": "labels.icon",
    //                         "stylers": [{"visibility": "off"}]
    //                     }, {
    //                         "featureType": "poi.government",
    //                         "elementType": "geometry.fill",
    //                         "stylers": [{"visibility": "on"}]
    //                     }, {
    //                         "featureType": "poi.park",
    //                         "elementType": "geometry",
    //                         "stylers": [{"visibility": "on"}]
    //                     }, {
    //                         "featureType": "poi.park",
    //                         "elementType": "geometry.fill",
    //                         "stylers": [{"visibility": "on"}, {"color": "#d3e6e2"}]
    //                     }, {
    //                         "featureType": "poi.park",
    //                         "elementType": "geometry.stroke",
    //                         "stylers": [{"visibility": "on"}]
    //                     }, {
    //                         "featureType": "poi.park",
    //                         "elementType": "labels",
    //                         "stylers": [{"visibility": "on"}]
    //                     }, {
    //                         "featureType": "poi.park",
    //                         "elementType": "labels.text.fill",
    //                         "stylers": [{"color": "#888686"}]
    //                     }, {
    //                         "featureType": "poi.park",
    //                         "elementType": "labels.icon",
    //                         "stylers": [{"visibility": "on"}]
    //                     }, {
    //                         "featureType": "road",
    //                         "elementType": "geometry.fill",
    //                         "stylers": [{"visibility": "on"}]
    //                     }, {
    //                         "featureType": "road",
    //                         "elementType": "geometry.stroke",
    //                         "stylers": [{"visibility": "off"}]
    //                     }, {
    //                         "featureType": "road",
    //                         "elementType": "labels.text",
    //                         "stylers": [{"visibility": "on"}]
    //                     }, {
    //                         "featureType": "road",
    //                         "elementType": "labels.icon",
    //                         "stylers": [{"visibility": "off"}]
    //                     }, {
    //                         "featureType": "road.highway",
    //                         "elementType": "geometry.fill",
    //                         "stylers": [{"color": "#fcfcfc"}]
    //                     }, {
    //                         "featureType": "road.highway",
    //                         "elementType": "labels",
    //                         "stylers": [{"visibility": "off"}]
    //                     }, {
    //                         "featureType": "road.highway",
    //                         "elementType": "labels.icon",
    //                         "stylers": [{"visibility": "off"}]
    //                     }, {
    //                         "featureType": "transit",
    //                         "elementType": "geometry.fill",
    //                         "stylers": [{"visibility": "on"}]
    //                     }, {
    //                         "featureType": "transit.station.airport",
    //                         "elementType": "geometry.fill",
    //                         "stylers": [{"visibility": "off"}]
    //                     }, {
    //                         "featureType": "water",
    //                         "elementType": "geometry.fill",
    //                         "stylers": [{"color": "#aed1ca"}]
    //                     }, {
    //                         "featureType": "water",
    //                         "elementType": "labels.text.fill",
    //                         "stylers": [{"visibility": "on"}]
    //                     }]
    //                 }
    //             }
    //         });
    //         $(this).css("height", data_height + "px");
    //     });
    // }

    /*-------------------------------------
     Masonry
     -------------------------------------*/

    var $container = $(".grid");
    $container.imagesLoaded(function () {
        $container.isotope({
            columnWidth: ".item-portfolio",
            itemSelector: ".item-portfolio",
            transitionDuration: '0.8s'
        });
        $(".item-portfolio").imagefill();
    });

    $('.filter--masonry li').click(function () {
        var selector = $(this).attr('data-filter');
        $container.isotope({filter: selector});
        $('.filter--masonry li.active').removeClass('active');
        $(this).addClass('active');
        return false;
    });

    /*-------------------------------------
     Start function
     -------------------------------------*/

    headerShow(600);
    blockHeight();
    opacityEffectBlock(sliderTop, this);
    pagination();
    autoHeightCircle();
    buttonShow();

    $(window).resize(function () {
        autoHeightCircle();
    });

})(jQuery);