window.$(document).ready(function () {
  window.$("button").click(function () {
    window.$("button.todoBtn.active").removeClass("active");
    window.$(this).addClass("active");
  });
});
