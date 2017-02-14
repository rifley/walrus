$(document).ready(function() {
  $(".clickable").click(function() {
    $("#initially-showing").toggle();
    $("#initially-hidden p").toggle();
    $("#initially-hidden img").toggle();
    //$("#initially-hidden img").toggle();
  });
});
