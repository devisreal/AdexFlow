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

var myBirthday = new Date()
myBirthday.setDate(3)
myBirthday.setMonth(5)
let today = new Date()

var birthdayToast = document.getElementById("birthday-toast")
if (today.getMonth() == myBirthday.getMonth() && today.getDate() == myBirthday.getDate()){
  birthdayToast.style.display = "flex"
}