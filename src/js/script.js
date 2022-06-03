window.onscroll = () => {
  
};

// Side Nav controls
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

// ScrollSpy
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('nav a');

window.onscroll = () => {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    document.getElementById("scroll-nav").style.top = "0px";
  } else {
    document.getElementById("scroll-nav").style.top = "-80px";
  };
  sections.forEach(section => {
    let top = window.scrollY;
    let offset = section.offsetTop - 150;
    let height = section.offsetHeight;
    let id = section.getAttribute('id');
    
    if(top >= offset && top < offset + height){
      navLinks.forEach(link => {
        link.classList.remove('active');
        document.querySelector(`nav a[href="#${id}"]`).classList.add('active');
      })      
    }
  })
}



// Animated Headline
$(function () {
  $(".animate-clip").animatedHeadline({
    animationType: "clip",
  });
});

// Experience Years
let startYear = 2017;
let currentYear = new Date().getFullYear();
let yearDifference = currentYear - startYear;
var years = document.getElementById("years");
years.innerHTML = yearDifference;

// copyright
var copyright = document.getElementById("copyright");
copyright.innerHTML = currentYear;

// Birthday Toast
var myBirthday = new Date()
myBirthday.setDate(12)
myBirthday.setMonth(5)
let today = new Date()
var birthdayToast = document.getElementById("birthday-toast")
if (today.getMonth() == myBirthday.getMonth() && today.getDate() == myBirthday.getDate()){
  birthdayToast.style.display = "flex"
}