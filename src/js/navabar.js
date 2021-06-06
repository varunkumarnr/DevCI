window.$(window).scroll(function () {
  if (window.$(this).scrollTop() > 40) {
    window.$(".header").addClass("fixed-top");
    window.$(".header").addClass("make-navbar-bg");
    window.$(".h").addClass("add-h");
  } else {
    window.$(".header").removeClass("fixed-top");
    window.$(".header").removeClass("make-navbar-bg");
    window.$(".h").removeClass("add-h");
  }
});
