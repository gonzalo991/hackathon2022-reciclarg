// ---------Responsive-navbar-active-animation-----------
function test() {
    var tabsNewAnim = $("#navbarSupportedContent");
    var selectorNewAnim = $("#navbarSupportedContent").find("li").length;
    var activeItemNewAnim = tabsNewAnim.find(".active");
    var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
    var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
    var itemPosNewAnimTop = activeItemNewAnim.position();
    var itemPosNewAnimLeft = activeItemNewAnim.position();
    $(".hori-selector").css({
        top: itemPosNewAnimTop.top + "px",
        left: itemPosNewAnimLeft.left + "px",
        height: activeWidthNewAnimHeight + "px",
        width: activeWidthNewAnimWidth + "px"
    });
    $("#navbarSupportedContent").on("click", "li", function (e) {
        $("#navbarSupportedContent ul li").removeClass("active");
        $(this).addClass("active");
        var activeWidthNewAnimHeight = $(this).innerHeight();
        var activeWidthNewAnimWidth = $(this).innerWidth();
        var itemPosNewAnimTop = $(this).position();
        var itemPosNewAnimLeft = $(this).position();
        $(".hori-selector").css({
            top: itemPosNewAnimTop.top + "px",
            left: itemPosNewAnimLeft.left + "px",
            height: activeWidthNewAnimHeight + "px",
            width: activeWidthNewAnimWidth + "px"
        });
    });
}
$(document).ready(function () {
    setTimeout(function () {
        test();
    });
});
$(window).on("resize", function () {
    setTimeout(function () {
        test();
    }, 500);
});
$(".navbar-toggler").click(function () {
    $(".navbar-collapse").slideToggle(300);
    setTimeout(function () {
        test();
    });
});

// --------------add active class-on another-page move----------
jQuery(document).ready(function ($) {
    // Get current path and find target link
    var path = window.location.pathname.split("/").pop();

    // Account for home page with empty path
    if (path == "") {
        path = "index.html";
    }

    var target = $('#navbarSupportedContent ul li a[href="' + path + '"]');
    // Add active class to target link
    target.parent().addClass("active");
});
$(document).ready(function () {

    $('.ir-arriba').click(function () {
        $('body, html').animate({
            scrollTop: '0px'
        }, 300);
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('.ir-arriba').slideDown(300);
        } else {
            $('.ir-arriba').slideUp(300);
        }
    });
    feather.replace();
});

// Loop selectors
var videos = document.querySelectorAll(".youtube");
for (var i = 0; i < videos.length; i++) {
    var youtube = videos[i];
    // Get function
    getVideos(youtube);
}

// Get videos function
function getVideos(el) {
    var img = document.createElement("img");
    // ingrsasr imagenes
    img.setAttribute('src', 'http://i.ytimg.com/vi/' + el.id + '/hqdefault.jpg');
    // agregar clase a las imagens
    img.setAttribute('class', 'thumb');
    // enveber los divs
    var video = document.createElement("div");
    // Remove this if you like
    video.setAttribute("class", "video_here");
    // Insertar los tag
    el.appendChild(img);
    el.appendChild(video);
    // click al video
    el.addEventListener('click', function () {
        var iframe = document.createElement("iframe");
        iframe.setAttribute('class', 'youtube_video');
        iframe.setAttribute('src', 'https://www.youtube.com/embed/' +
            this.id + '?autoplay=1&autohide=1&border=0&wmode=opaque&enablejsapi=1');
        // Remplazar imagen por video
        this.parentNode.replaceChild(iframe, this);
    }, false);
}
// fin tutoriales