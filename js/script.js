
jQuery(function ($){

    $(window).scroll(function () {
		var topHeight = $('.top-header').outerHeight();
		var viewFooter = $('body').height() - $('footer').outerHeight() - ($(window).height() / 2);
		if($(window).width() < 991){
			viewFooter = $('body').height() - $('footer').outerHeight();
		}
		if($('.top-header').css('display') == 'none'){
			topHeight = 0;
		}
		if ($(window).scrollTop() > topHeight && $(window).scrollTop() < viewFooter) {
			$('.site-header').addClass('sticky');
		} else {
			$('.site-header').removeClass('sticky');
		}
    });

    $('main').first().addClass('header-offset').css('--header-offset', $('.site-header').outerHeight() + 'px');

    $(document).ready(function() {
        $(".primary-menu li.menu-dropdown > a").append('<span class="dropdown-btn"><svg width="11" height="6" viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.66113 5.5L0.661133 0.5H10.6611L5.66113 5.5Z" fill="#1D1B20"/></svg></span>');    
        
        $('.dropdown-btn').on('click', function(event) {
            event.preventDefault();
            event.stopPropagation();
            var $parentLi = $(this).parent().parent();
            $parentLi.toggleClass('open').siblings().removeClass('open');
            $parentLi.find("ul.sub-menu").first().slideToggle();
            $parentLi.siblings().find("ul.sub-menu").slideUp().parent().removeClass('open');
        });
    
        $(document).on('click', function(event) {
            if (!$(event.target).closest('.menu-dropdown').length) {
                $('.menu-dropdown').removeClass('open');
                $('.sub-menu').slideUp();
            }
        });
    });
    
    $('.primary-menu li').has('ul').addClass('menu-dropdown');

    $(document).ready(function(){
        $('.hamburger').click(function(){
            $(this).toggleClass('active');
            $('.overlay').toggleClass('active');
            $('.nav-bar').toggleClass('active');
            $('.bottom-header .logo').toggleClass('active');
            $('body').addClass('overflow-hidden');
        });
    
        $('.overlay, .nav-bar .close-btn').click(function(){
            $('.overlay').removeClass('active');
            $('.hamburger').removeClass('active');
            $('.nav-bar').removeClass('active');
            $('.bottom-header .logo').removeClass('active');
            $('body').removeClass('overflow-hidden');
        });

        $('.search-icon').click(function() {
            $('.search-box').addClass('open');
            setTimeout(function() {
                $('.search-box input').focus();
            }, 100);
        });
        $('.search-box .close-btn').click(function(){
            $('.search-box').removeClass('open');
        });

        function cloneTopBarIcon() {
            const windowWidth = $(window).width();
        
            if (windowWidth <= 1024) {
                if (!$('.nav-bar > .search-box').length) {
                    $('.search-box').clone().appendTo('.nav-bar');
                }
            } else {
                $('.nav-bar > .search-box').remove();
            }
    
            if (windowWidth <= 991) {
                if (!$('.nav-bar > .top-dropdown').length) {
                    $('.top-dropdown').clone().appendTo('.nav-bar');
                }
                if (!$('.nav-bar > .account-wishlist').length) {
                    $('.account-wishlist').clone().appendTo('.nav-bar');
                }
            } else {
                $('.nav-bar > .top-dropdown').remove();
                $('.nav-bar > .account-wishlist').remove();
            }
        }
        
        cloneTopBarIcon();
        
        $(window).resize(function() {
            cloneTopBarIcon();
        });
        
    });

});


function initializeSplide(selector, options, extensions) {
    document.querySelectorAll(selector).forEach(element => {
        if (element.querySelector('.splide__track') && element.querySelector('.splide__list')) {
            new Splide(element, options).mount(extensions);
        } else {
            console.error(`Splide initialization failed: Missing required elements in ${selector}`);
        }
    });
}

if (document.querySelector('.banner-slide')) {
    initializeSplide('.banner-slide', {
        perPage: 1,
        pagination: false,
        breakpoints: {
            1024: {
                arrows: false,
            }
        }
    });
}

if (document.querySelector('.sale-list-slide')) {
    initializeSplide('.sale-list-slide', {
        type: 'loop',
        perPage: 5,
        arrows: false,
        pagination: false,
        gap: 30,
        width: 'auto',
        autoScroll: {
            speed: 0.5,
            pauseOnHover: false,
        },
    }, window.splide.Extensions);
}

if (document.querySelector('.feature-product-list')) {
    initializeSplide('.feature-product-list', {
        perPage: 4,
        arrows: false,
        pagination: false,
        gap: 30,
        breakpoints: {
            1024: {
                perPage: 3,
            },
            991: {
                perPage: 2,
            },
            575: {
                perPage: 1,
            }
        }
    });
}

if (document.querySelector('.blog-list-slide')) {
    initializeSplide('.blog-list-slide', {
        perPage: 4,
        arrows: false,
        pagination: false,
        gap: 26,
        breakpoints: {
            1024: {
                perPage: 3,
            },
            991: {
                perPage: 2,
            },
            575: {
                perPage: 1,
            }
        }
    });
}




