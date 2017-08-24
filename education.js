$(".edu-q").click( function () {
  var container = $(this).parents(".edu-c");
  var answer = container.find(".edu-a");
  var trigger = container.find(".edu-t");

  answer.slideToggle(200);

  if (trigger.hasClass("edu-o")) {
    trigger.removeClass("edu-o");
  }
  else {
    trigger.addClass("edu-o");
  }
});
