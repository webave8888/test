
function today() {
    var mydate = new Date();
    var dayarray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var montharray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    document.write("" + dayarray[mydate.getDay()] + ", " + montharray[mydate.getMonth()] + " "
        + mydate.getDate() + ", " + mydate.getFullYear());
}


today();

window.Exit.enable("https://overwatchtraffic.offerspace.com/?router=33B67F785CCB410DA47CC0A1518617304614", "#ExitPop", false, false);

jQuery(function ($) {
    $(".cvv-link").click(function () {
        $(this).siblings(".cvv-image").slideToggle()
    })
});
jQuery(function ($) {
    $(".cvv-link").click(function () {
        $(this).parent().siblings(".cvv-image").slideToggle()
    })
});

jQuery(function ($) {
    $('a[href^="#"]').click(function () {
        var target = $(this).attr('href');
        $('html, body').animate({scrollTop: $(target).offset().top}, 1000);
        return false;
    });
});


jQuery(function ($) {
    var mydate = new Date();
    var montharray = [
        "Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
    $('.date-container').text(mydate.getDate() + " " + montharray[mydate.getMonth()] + " "
        + " " + mydate.getFullYear());
});


if ($(window).width() < 768) {
    jQuery(function ($) {
        $('a[href^="#formTop"]').click(function () {
            var target = $(this).attr('href');
            $('html, body').animate({scrollTop: $(target).offset().top}, 1000);
            return false;
        });
    });

}

jQuery(function ($) {
    $(".navbar-toggle").click(function () {
        $(this).parent().toggleClass("dropped");
        if ($('.navbar-collapse').css('display') == 'none') {
            $('.navbar-collapse').animate({height: 'show'}, 400);
        } else {
            $('.navbar-collapse').animate({height: 'hide'}, 400);
        }
    });
});

jQuery(function ($) {
    var OpenPopupLink = $('a.open-popup-link');
    var ClosePopupLink = $('a.close-popup-link');
    var PopupWrapper = $('.popup-wrapper');
    OpenPopupLink.click(function () {
        var clickId = this.id;
        $('#popup-' + clickId).fadeIn(300);
        PopupWrapper.fadeIn(300);
        $('body').css('overflow', 'auto').css('height', '100%');
    });
    ClosePopupLink.click(function () {
        $(this).parents('.popup').fadeOut(300);
        PopupWrapper.fadeOut(300);
        $('body').css('overflow', 'auto').css('height', 'auto');
    });
    $(document).keydown(function (eventObject) {
        if ($('[id^="popup-"]').is(":visible")) {
            if (eventObject.which == '27') {
                $('[id^="popup-"]').fadeOut(300);
                PopupWrapper.fadeOut(300);
                $('body').css('overflow', 'auto').css('height', 'auto');
            }
        }
    });

});


$("a").attr("target", "_blank");
$('#sidebar').scrollToFixed({marginTop: 43});

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var start = +new Date();
var people = random(9000, 11000);
var DISCOUNTs_start = random(400, 600);
var DISCOUNTs = DISCOUNTs_start;

var pr = $("#people-reading");
var tl = $("#DISCOUNTs-left");
var fb = $("#flash-banner");

function data() {
    people += random(200, 500);

    if (shown) {
        if (DISCOUNTs > 50)
            DISCOUNTs -= random(10, 200) / 100
        else
            DISCOUNTs -= random(10, 30) / 100

        DISCOUNTs = Math.max(5, DISCOUNTs);
        tl.text(Math.floor(DISCOUNTs));
    }

    pr.text(people);

    if (DISCOUNTs < 50) fb.addClass("flashing");
}

var shown = false;
var ts = $("#trails-start");
var hT = ts.offset().top;
var hH = ts.outerHeight();
var wH = $(window).height();

var elH = $(".container").css("position") === "fixed" ? $(".container") : $(window);

elH.scroll(function () {
    if (shown) return;

    var wS = elH.scrollTop();

    if (wS > hT + hH - wH) {
        shown = true;
        $("#trending").removeClass("hidden-DISCOUNTs");
    }
});

data();
window.setInterval(data, 1000);