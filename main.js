$(window).scroll(function () {
if ($(window).scrollTop() >= 50) {
$("#menu").css('background-color','#343a40');
} else {
$("#menu").css('background-color','transparent');
}
});