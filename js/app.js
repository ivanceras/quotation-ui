$(document).ready(function() {

    windowScrollListener();
    $(window).scroll(windowScrollListener);

    function windowScrollListener() {
        // add `scrolled` class in html tag
        $('html')[$(window).scrollTop() >= 10 ? 'addClass' : 'removeClass']('scrolled');
    }
});