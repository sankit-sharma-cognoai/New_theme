$("#allincall-popup").click(function() {

    document.getElementById("easychat-bot-minimize-button").style.display = "block";
    $("#allincall-chat-box").removeClass("animate__animated animate__slideOutDown");
    $("#allincall-chat-box").addClass("animate__animated animate__slideInUp");
    document.getElementById("allincall-chat-box").style.display = "block";
    document.getElementById("allincall-popup").style.display = "none";
    sticky_arrow_show();

    resize_chabot_window();
    handleHomePageBanner();
    fadeIn();

    fadeAway();



});


$("#easychat-bot-minimize-button").click(function() {

    document.getElementById("easychat-bot-minimize-button").style.display = "none";
    $("#allincall-chat-box").removeClass("animate__animated animate__slideInUp");
    $("#allincall-chat-box").addClass("animate__animated animate__slideOutDown");
    setTimeout(function() {
        document.getElementById("allincall-popup").style.display = "block";
    }, 1000);
});
$("#easychat-bot-minimize-button-mobile").click(function() {

    document.getElementById("easychat-bot-minimize-button").style.display = "none";

    $("#allincall-chat-box").removeClass("animate__animated animate__slideInUp");
    $("#allincall-chat-box").addClass("animate__animated animate__slideOutDown");
    setTimeout(function() {
        document.getElementById("allincall-popup").style.display = "block";
    }, 1000);
});

$("#easychat-bot-close-icon").click(function() {

    document.getElementById("easychat-bot-minimize-button").style.display = "none";
    $("#allincall-chat-box").removeClass("animate__animated animate__slideInUp");
    $("#allincall-chat-box").addClass("animate__animated animate__slideOutDown");
    setTimeout(function() {
        document.getElementById("allincall-popup").style.display = "block";
    }, 1000);
});
$("#easychat-bot-close-icon-mobile").click(function() {

    document.getElementById("easychat-bot-minimize-button").style.display = "none";
    $("#allincall-chat-box").removeClass("animate__animated animate__slideInUp");
    $("#allincall-chat-box").addClass("animate__animated animate__slideOutDown");
    setTimeout(function() {
        document.getElementById("allincall-popup").style.display = "block";
    }, 1000);
});

var type_of_event = "";

if (detectIEEdge()) {

    type_of_event = 'keyup';
} else {
    type_of_event = 'input';
}
$('#user_input').on(type_of_event, function() {
    document.getElementById("easychat-query-send-icon").style.display = "block";
    document.getElementById("easychat-mic-icon").style.display = "none";
    document.getElementById("user_input_placeholder_text").style.visibility = "hidden";
    document.getElementById("tooltip-mic-send-text").innerHTML = "Send";

    if ($('#user_input').text() == "") {

        document.getElementById("easychat-query-send-icon").style.display = "none";
        document.getElementById("easychat-mic-icon").style.display = "block";
        document.getElementById("user_input_placeholder_text").style.visibility = "visible";
        document.getElementById("tooltip-mic-send-text").innerHTML = "Mic";

    }

    resize_chabot_window();

});


$(".easychat-recommendation-item").click(function() {
    $(".easychat-bot-recommendation-wrapper").css("display", "none");
    $(".easychat-bot-welcome-banner-wrapper").css("display", "none");
    $(".easychat-bottheme3-navbar").removeClass("easychat-welcome-home-navbar-div");
    $("#allincall-chat-box").css("backgroundColor", "#ffffff")
    $(".easychat-bot-message-wrapper").css("display", "flex");
    $(".easychat-user-message-wrapper").css("display", "flex");
    $(".easychat-bot-quick-recommendation-wrapper").css("display", "inline-block");
    $(".easychat-bottheme3-message-section-area-div").css("padding", "16px");
    // $(".easychat-bot-sticky-intent-wrapper").css("display", "flex");
    $(".easychat-bot-sticky-menu-wrapper").css("display", "block");
    $(".easychat-bottheme3-message-section-area-div").css("overflowY", "auto");
    // $(".easychat-bot-end-chat-button-div").css("display", "flex");
    $(".easychat-bot-restart-div svg").css("fill", "#767B87");


    resize_chabot_window();
    sticky_arrow_show();


});


$("#myBtnsticty").click(function() {

    $(".easychat-bot-sticky-intent-wrapper").css("display", "flex");
    $(".easychat-bot-sticky-menu-wrapper").css("display", "none");



    resize_chabot_window();


});



function sticky_scroll_forward() {
    document.getElementById("easychat-bot-sticky-intent-items-div").scrollBy(200, 0);
    console.log("scroll left")
}

function sticky_scroll_backward() {
    document.getElementById("easychat-bot-sticky-intent-items-div").scrollBy(-200, 0);
    console.log("scroll right")

}

function detectIEEdge() {
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf('MSIE ');
    if (msie > 0) {
        // IE 10 or older => return version number
        return true;
    }
    var trident = ua.indexOf('Trident/');
    if (trident > 0) {
        // IE 11 => return version number
        var rv = ua.indexOf('rv:');
        return true;
    }
    var edge = ua.indexOf('Edge/');
    if (edge > 0) {
        // Edge => return version number
        return false;
    }
    // other browser
    return false;
}




function sticky_arrow_show() {
    total_length_of_buttons = 0
    for (var button_iterator = 0; button_iterator < document.getElementsByClassName("button-sticky-item").length; button_iterator++) {
        total_length_of_buttons += document.getElementsByClassName("button-sticky-item")[button_iterator].offsetWidth;


    }

    if (total_length_of_buttons < 0.9 * document.getElementById("easychat-bot-sticky-intent-items-div").offsetWidth) {

        $(".sticky-intent-arrow-button-right").css("display", "none");
        $(".sticky-intent-arrow-button-left").css("display", "none");
        $(".easychat-bot-sticky-intent-items-div").css("width", "100%");


    }


}


function display_sticky_menu_items() {
    if (document.getElementById("arrow_up").style.display == "block") {
        document.getElementById("arrow_up").style.display = "none";
        document.getElementById("arrow_down").style.display = "block";
        var sticky_menu = document.getElementById('easychat_sticky_menu_items');
        sticky_menu.className = ' easychat-sticky-menu-items';

    } else {
        document.getElementById("arrow_up").style.display = "block";
        document.getElementById("arrow_down").style.display = "none";
        var sticky_menu = document.getElementById('easychat_sticky_menu_items');
        sticky_menu.className += ' easychat-sticky-menu-items-show';

    }
    resize_chabot_window();

}

function resize_chabot_window() {
    document.getElementById('easychat-chat-container').style.height = (document.getElementById('allincall-chat-box').clientHeight - (64 + document.getElementById("easychat-footer").clientHeight)).toString() + "px ";


}

window.onresize = function() {

    resize_chabot_window();
    handleHomePageBanner();


}


function feedbackValueFunc(el) {

    if (el.id == 'angry-emoji-div') {
        document.getElementById('angry-emoji-div').src = './img/angry-emoji-animate.gif';
        document.getElementById('sad-emoji-div').src = './img/sad-emoji.svg';
        document.getElementById('happy-emoji-div').src = './img/happy-emoji.svg';
        document.getElementById('inlove-emoji-div').src = './img/in-love-emoji.svg';
        document.getElementById('angry-emoji-div').style.width = '60px';
        document.getElementById('angry-emoji-div').style.height = '60px';
        contentvalue = 1

    } else {
        document.getElementById('angry-emoji-div').style.width = '52px';
        document.getElementById('angry-emoji-div').style.height = '52px';
    }

    if (el.id == 'sad-emoji-div') {
        document.getElementById('sad-emoji-div').src = './img/sad-emoji-animate.gif';
        document.getElementById('angry-emoji-div').src = './img/angry-emoji.svg';

        document.getElementById('happy-emoji-div').src = './img/happy-emoji.svg';
        document.getElementById('inlove-emoji-div').src = './img/in-love-emoji.svg';
        document.getElementById('sad-emoji-div').style.width = '60px';
        document.getElementById('sad-emoji-div').style.height = '60px';
        contentvalue = 2
    } else {
        document.getElementById('sad-emoji-div').style.width = '52px';
        document.getElementById('sad-emoji-div').style.height = '52px';
    }

    if (el.id == 'happy-emoji-div') {
        document.getElementById('happy-emoji-div').src = './img/happy-emoji-animate.gif';

        document.getElementById('angry-emoji-div').src = './img/angry-emoji.svg';

        document.getElementById('sad-emoji-div').src = './img/sad-emoji.svg';

        document.getElementById('inlove-emoji-div').src = './img/in-love-emoji.svg';
        document.getElementById('happy-emoji-div').style.width = '60px';
        document.getElementById('happy-emoji-div').style.height = '60px';
        contentvalue = 3

    } else {
        document.getElementById('happy-emoji-div').style.width = '52px';
        document.getElementById('happy-emoji-div').style.height = '52px';
    }

    if (el.id == 'inlove-emoji-div') {
        document.getElementById('inlove-emoji-div').src = './img/in-love-emoji-animate.gif';
        document.getElementById('angry-emoji-div').src = './img/angry-emoji.svg';
        document.getElementById('sad-emoji-div').src = './img/sad-emoji.svg';
        document.getElementById('happy-emoji-div').src = './img/happy-emoji.svg';
        document.getElementById('inlove-emoji-div').style.width = '60px';
        document.getElementById('inlove-emoji-div').style.height = '60px';
        contentvalue = 4
    } else {
        document.getElementById('inlove-emoji-div').style.width = '52px';
        document.getElementById('inlove-emoji-div').style.height = '52px';
    }
}



function handleHomePageBanner() {
    var track = document.querySelector('.easychat-carousel-track');
    var slides = [];
    var track_children = Array.prototype.slice.call(track.children);
    track_children.forEach(function(eachChild) {
        slides.push(eachChild);
    })
    var dotsNav = document.querySelector(".easychat-carousel-nav");
    var dots_nav_children = Array.prototype.slice.call(dotsNav.children);
    var dots = [];
    dots_nav_children.forEach(function(eachChild) {
        dots.push(eachChild);
    });

    var slideWidth = slides[0].getBoundingClientRect().width;

    // arranging slides next to one another

    slides.forEach(function(slide, index) {
        slide.style.left = (slideWidth + 24) * index + 'px';
    })

    // Handling indicator click
    dotsNav.addEventListener('click', function(e) {
            var targetDot = e.target.closest('button');

            if (!targetDot) return;

            var currentSlide = track.querySelector('.easychat-current-slide');
            var currentDot = dotsNav.querySelector('.active-slide-indicator');

            var targetIndex = dots.findIndex(function(dot) {
                return dot === targetDot;
            })
            var targetSlide = slides[targetIndex];

            moveToSlide(track, currentSlide, targetSlide);

            updateDots(currentDot, targetDot);
        })
        //automatic carousel movement 
    setInterval(function() {
        var currentSlide = track.querySelector('.easychat-current-slide');
        var currentDot = dotsNav.querySelector('.active-slide-indicator');
        var nextSlide;
        var nextDot;
        if (currentSlide.nextElementSibling) {
            nextSlide = currentSlide.nextElementSibling;
            nextDot = currentDot.nextElementSibling;
        } else {
            nextSlide = currentSlide.parentElement.firstElementChild;
            nextDot = currentDot.parentElement.firstElementChild;
        }


        updateDots(currentDot, nextDot);
        moveToSlide(track, currentSlide, nextSlide);
    }, 5000);

    function moveToSlide(track, currentSlide, targetSlide) {
        track.style.transform = "translateX(-" + targetSlide.style.left + ")";
        currentSlide.classList.remove("easychat-current-slide");
        targetSlide.classList.add("easychat-current-slide");
    }

    function updateDots(currentDot, targetDot) {
        currentDot.classList.remove('active-slide-indicator');
        targetDot.classList.add('active-slide-indicator');
    }


    track.addEventListener('touchstart', handleTouchStart, false);
    track.addEventListener('touchmove', handleTouchMove, false);

    var xDown = null;
    var yDown = null;

    function getTouches(evt) {
        return evt.touches || // browser API
            evt.originalEvent.touches; // jQuery
    }

    function handleTouchStart(evt) {
        const firstTouch = getTouches(evt)[0];
        xDown = firstTouch.clientX;
        yDown = firstTouch.clientY;
    };

    function handleTouchMove(evt) {
        if (!xDown || !yDown) {
            return;
        }

        var xUp = evt.touches[0].clientX;
        var yUp = evt.touches[0].clientY;

        var xDiff = xDown - xUp;
        var yDiff = yDown - yUp;

        if (Math.abs(xDiff) > Math.abs(yDiff)) { /*most significant*/
            if (xDiff > 0) {
                /* right swipe */
                var currentSlide = track.querySelector('.easychat-current-slide');
                var currentDot = dotsNav.querySelector('.active-slide-indicator');
                var nextSlide;
                var nextDot;
                if (currentSlide.nextElementSibling) {
                    nextSlide = currentSlide.nextElementSibling;
                    nextDot = currentDot.nextElementSibling;

                    updateDots(currentDot, nextDot);
                    moveToSlide(track, currentSlide, nextSlide);
                }
            } else {
                /* left swipe */
                var currentSlide = track.querySelector('.easychat-current-slide');
                var currentDot = dotsNav.querySelector('.active-slide-indicator');
                var previousSlide;
                var previousDot;
                if (currentSlide.previousElementSibling) {
                    previousSlide = currentSlide.previousElementSibling;
                    previousDot = currentDot.previousElementSibling;

                    updateDots(currentDot, previousDot);
                    moveToSlide(track, currentSlide, previousSlide);
                }
            }
        }
        /* reset values */
        xDown = null;
        yDown = null;
    };
}



// LANGUAGE JAVASCRIPT
function fadeIn() {
    setTimeout(function() {

        $('.easychat-bot-language-div').addClass('easychat-bot-language-div-active', 4000);
        $(".bot-selected-language-animation-text").show('slow');
        $(".easychat-bot-language-div.easychat-bot-language-div-active").css("pointerEvents", "none");


    }, 1000);
}

function fadeAway() {
    setTimeout(function() {

        $('.easychat-bot-language-div').removeClass('easychat-bot-language-div-active', 1000);

        $(".bot-selected-language-animation-text").hide('slow');
        $(".easychat-bot-language-div").css("pointerEvents", "auto");


    }, 3000);
}

function fadeAwayOnItem() {
    setTimeout(function() {

        $('.easychat-bot-language-div').removeClass('easychat-bot-language-div-active');

        $(".bot-selected-language-animation-text").hide('slow');
        // $(".easychat-bot-language-div.easychat-bot-language-div-active").css("pointerEvents", "auto");


    }, 900);
}

const language_dropdownTrigger = $('.easychat-bot-language-div');
const language_dropdown = $('#language_dropdown_content');
const language_dropdownItem = $('.dropdown-item');

function isDropdownActive() {
    if ($('#language_dropdown_content').hasClass('is-active')) {
        $('.bot-selected-language-animation-text').css({ color: "#0254D7" });
        $('.minimize-icon-language svg').css({ transform: "rotate(180deg)" })
        $('.bot-language-icon svg').css({ fill: "#0254D7" })
    } else {
        $('.bot-selected-language-animation-text').css({ color: "#000" });
        $('.minimize-icon-language svg').css({ transform: "rotate(0deg)" })
        $('.bot-language-icon svg').css({ fill: "#2D2D2D" })
    }
}
language_dropdownTrigger.on('click', function(event) {
    event.stopPropagation();
    $(this).addClass('easychat-bot-language-div-active');
    $(".bot-selected-language-animation-text").show('slow');
    $(this).closest('.easychat-bot-language-div').find('#language_dropdown_content').toggleClass('is-active');

    isDropdownActive();

});
$('.language-dropdown-items').on('click', function(event) {
    event.stopPropagation();
    $(this).find('.active-language').removeClass('active-language');
    $(event.target).addClass('active-language');
    $('#language_dropdown_content').toggleClass('is-active');
    $('.bot-selected-language-animation-text').text($(event.target).text());
    isDropdownActive();
    fadeAwayOnItem();
})
$('#allincall-chat-box').on('click', function() {
    $('#language_dropdown_content').removeClass('is-active');
    isDropdownActive();
    fadeAway();
})






// header dropdown js
var $header_dropdownOrigin = $('.bot-header-menu-icon');
var $header_dropdownTrigger = $('.bot-header-menu-icon');
var $header_dropdown = $('#bot_header_dropdown_content');
var $header_dropdownItem = $('.header-dropdown-item');


$header_dropdownTrigger.on('click', function() {
    $(this).closest('.easychat-bot-header-option-dropdown').find('#bot_header_dropdown_content').toggleClass('is-active');
});
$header_dropdownItem.on("click", function() {

    console.log("click");
});

$('html').click(function() {
    $header_dropdown.removeClass('is-active');
    // fadeAwayOnItem();
});

$header_dropdownOrigin.click(function(e) {
    e.stopPropagation();
});