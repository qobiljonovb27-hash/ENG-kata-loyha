
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



const botToken = "BOT_TOKEN";
const chatId = "YOUR_CHAT_ID";

document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  let text = `📩 Yangi xabar:%0A
👤 Ism: ${name}%0A
📧 Email: ${email}%0A
💬 Xabar: ${message}`;

  fetch(`https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${text}`)
    .then(response => {
      alert("Xabar sizga yuborildi!");
    })
    .catch(error => {
      alert("Xatolik yuz berdi!");
    });
});


document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Xabaringiz muvaffaqiyatli yuborildi!");
});