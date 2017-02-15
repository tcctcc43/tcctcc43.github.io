$(function () {
    $('.nav-menu-btn').click(function () {
        $(this).toggleClass('active');
        $('.nav-list').toggleClass('active');
    });

    $('.nav-list li').click(function () {
        $('.nav-list').removeClass('active');
        $('.nav-menu-btn').removeClass('active');
    });
});
