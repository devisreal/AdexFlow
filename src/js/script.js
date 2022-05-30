window.onscroll = () => {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    document.getElementById("scroll-nav").style.top = "0px";
  } else {
    document.getElementById("scroll-nav").style.top = "-80px";
  }
};

$(document).ready(function () {
  $("#show-menu").click(function () {
    $("#offcanvas").show();
  });
  $("#show-menu-initial").click(function () {
    $("#offcanvas").show();
  });
  $("#close-menu").click(function () {
    $("#offcanvas").hide();
  });
  $(".side-nav").click(() => {
    $("#offcanvas").hide();
  });
});

$(function () {
  $(".animate-clip").animatedHeadline({
    animationType: "clip",
  });
});

let startYear = 2017;
let currentYear = new Date().getFullYear();
let yearDifference = currentYear - startYear;

var years = document.getElementById("years");
years.innerHTML = yearDifference;

var copyright = document.getElementById("copyright");
copyright.innerHTML = currentYear;
