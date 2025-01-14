//navbar toggle
let menu = document.querySelector("#menu-icon");
let navList = document.querySelector(".navbar ul");

menu.onclick = () => {
  menu.classList.toggle("fa-xmark");
  navList.classList.toggle("active");
};
window.onscroll = () => {
  menu.classList.remove("fa-xmark");
  navList.classList.remove("active");
};

//typed js code
const typed = new Typed("#element", {
  strings: ["Front End Developer.", "Web Developer."],
  typeSpeed: 80,
  backspeed: 80,
  backDelay: 1200,
  loop: true,
});
//active nav link code
const navLinkEls = document.querySelectorAll(".nav-link");
const sectionEls = document.querySelectorAll("section");

let currentSection = "home";
window.addEventListener("scroll", () => {
  sectionEls.forEach((sectionEl) => {
    if (window.scrollY >= sectionEl.offsetTop - sectionEl.clientHeight / 2) {
      currentSection = sectionEl.id;
    }
  });
  navLinkEls.forEach((navLinkEl) => {
    if (navLinkEl.href.includes(currentSection)) {
      document.querySelector(".active").classList.remove("active");
      navLinkEl.classList.add("active");
    }
  });
});

//certificate slider code
let scrollContainer = document.querySelector(".cards");
let arrowPrev = document.querySelector(".leftArrow");
let arrowNext = document.querySelector(".rightArrow");
scrollContainer.addEventListener("wheel", (e) => {
  e.preventDefault();
  scrollContainer.scrollLeft += e.deltaY;
  scrollContainer.style.scrollBehavior = "auto";
});
arrowNext.addEventListener("click", () => {
  scrollContainer.style.scrollBehavior = "smooth";
  scrollContainer.scrollLeft += 250;
});
arrowPrev.addEventListener("click", () => {
  scrollContainer.style.scrollBehavior = "smooth";
  scrollContainer.scrollLeft -= 250;
});

//Scroll top button
let scrollTop = document.querySelector(".scroll-top");

function toggleScrollTop() {
  if (scrollTop) {
    window.scrollY > 100
      ? scrollTop.classList.add("active")
      : scrollTop.classList.remove("active");
  }
}
scrollTop.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

window.addEventListener("load", toggleScrollTop);
document.addEventListener("scroll", toggleScrollTop);

/* form submit */
let formSubmit = document.querySelector("#form-contact");
formSubmit.addEventListener("submit", (e) => {
  e.preventDefault();
  let nameForm = document.querySelector("#formName").value;
  let emailForm = document.querySelector("#formEmail").value;
  let messageForm = document.querySelector("#formMessage").value;
  // console.log(nameForm);
  fetch("https://formsubmit.co/ajax/deepanvitap@gmail.com", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name: "FormSubmit",
      nameForm,
      emailForm,
      messageForm,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      var x = document.getElementById("responseMsg");
      x.innerHTML = "";
      x.innerHTML += `<div><b>Thank You.</b> We will contact you shorty!</div>`;
      x.className = "show accept";
      setTimeout(function () {
        x.className = x.className.replace("show", "");
      }, 3000);

      document.getElementById("form-contact").reset();
    })
    .catch((error) => {
      console.log(error);
      var x = document.getElementById("snackbar");
      x.innerHTML += `<p><b>Sorry.</b> We can't process your request right now. Please try shorty!</p>`;
      x.className = "show reject";
      setTimeout(function () {
        x.className = x.className.replace("show", "");
      }, 3000);
    });
});
