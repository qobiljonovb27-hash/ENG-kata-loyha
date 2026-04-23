
const counters = document.querySelectorAll(".counter");
counters.forEach((counter) => {
  counter.innerText = "0";
  const updateCounter = () => {
    const target = +counter.getAttribute("data-target");
    const c = +counter.innerText;
    const increment = target / 200;
    if (c < target) {
      counter.innerText = `${Math.ceil(c + increment)}`;
      setTimeout(updateCounter, 10);
    } else {
      counter.innerText = target;
    }
  };
  updateCounter();
});
const faders = document.querySelectorAll(".fade-in");
const appearOptions = { threshold: 0.1 };

const appearOnScroll = new IntersectionObserver(function (
  entries,
  appearOnScroll,
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("show");
    appearOnScroll.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach((fader) => appearOnScroll.observe(fader));




let username = promt("Ismingizni Kiriting");
if (username.includes("A")) {
  console.log(Sizni);
}



// script.js

document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Xabaringiz yuborildi!");
});

document.getElementById("registerForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Ro‘yxatdan o‘tish muvaffaqiyatli!");
});




document.getElementById("btn").addEventListener("click", function () {
  alert("Mening hayotim sahifasiga xush kelibsiz!");
});

document.getElementById("contactForm").addEventListener("submit", function(e){
  e.preventDefault();
  alert("Xabaringiz yuborildi!");
});


document.getElementById("contactForm").addEventListener("submit", function(e){
  e.preventDefault();

  let name = document.getElementById("name").value;
  let message = document.getElementById("message").value;

  // Demo status
  document.getElementById("status").innerText =
    "Xabaringiz yuborildi! (demo)";

  console.log("Ism:", name);
  console.log("Xabar:", message);

  // form reset
  this.reset();
});