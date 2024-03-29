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
let sections = document.querySelectorAll("section");
let sideNav = document.querySelectorAll("nav a.side-nav");
let navLinks = document.querySelectorAll("nav a.top-nav");

window.onscroll = () => {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    document.getElementById("scroll-nav").style.top = "0px";
  } else {
    document.getElementById("scroll-nav").style.top = "-80px";
  }
  sections.forEach((section) => {
    let top = window.scrollY;
    let offset = section.offsetTop - 150;
    let height = section.offsetHeight;
    let id = section.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
        document.querySelector(`nav a[href="#${id}"]`).classList.add("active");
      });
    }
  });
};

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
var myBirthday = new Date();
myBirthday.setDate(12);
myBirthday.setMonth(5);
let today = new Date();
var birthdayToast = document.getElementById("birthday-toast");
if (
  today.getMonth() == myBirthday.getMonth() &&
  today.getDate() == myBirthday.getDate()
) {
  birthdayToast.style.display = "flex";
} else {
  birthdayToast.style.display = "none";
}

// Contact Form
const sendBtn = document.getElementById("send-button");
const form = document.getElementById("form");
const btnValue = document.getElementById("btn-value");
const formAlert = document.getElementById("form-alert");
const closeAlert = document.getElementById("close-form-alert");
sendBtn.addEventListener("click", function (e) {
  e.preventDefault();
  btnValue.innerHTML = "Submitting ...";
  const serviceID = "default_service";
  const templateID = "template_s0q3ebs";

  emailjs.sendForm(serviceID, templateID, form).then(
    () => {
      btnValue.innerHTML = "Submit Form";
      formAlert.style.display = "flex";
      closeAlert.onclick = function () {
        window.location.reload(true);
      };
    },
    (err) => {
      btnValue.innerHTML = "Submit Form";
      alert(JSON.stringify(err));
    }
  );
});

//ScrollReveal
window.sr = ScrollReveal({
  easing: "cubic-bezier(0.5, 0, 0, 1)",
  // interval: 16,
});

sr.reveal(".about-img, .contact-details", {
  distance: "50px",
  duration: 700,
  origin: "bottom",
  scale: 0.75,
  opacity: 0,
});

sr.reveal(".jumbo.right, .contact-form", {
  distance: "50px",
  duration: 700,
  origin: "bottom",
  scale: 0.75,
  opacity: 0,
  delay: 500,
});

sr.reveal(".jumbo.left", {
  distance: "50px",
  duration: 1000,
  origin: "bottom",
  scale: 0.75,
  opacity: 0,
  delay: 500,
});

// Scrollreveal headings
sr.reveal(".service-heading, .portfolio-heading, .contact-heading", {
  distance: "50px",
  duration: 700,
  origin: "bottom",
  scale: 0.75,
  opacity: 0,
  // delay: 500,
});

// Scrollreveal Triple Containers
// left
sr.reveal(".service-box.left, .portfolio-box.left", {
  distance: "70px",
  duration: 800,
  origin: "bottom",
  scale: 0.75,
  opacity: 0,
  delay: 300,
});

// center
sr.reveal(".service-box.center, .portfolio-box.center", {
  distance: "70px",
  duration: 800,
  origin: "bottom",
  scale: 0.75,
  opacity: 0,
  delay: 700,
});

// right
sr.reveal(".service-box.right, .portfolio-box.right", {
  distance: "70px",
  duration: 800,
  origin: "bottom",
  scale: 0.75,
  opacity: 0,
  delay: 1000,
});

// Footer
sr.reveal(".footer-link", {
  interval: 30,
  duration: 900,
  origin: "left",
  scale: 0.75,
  opacity: 0,
});
