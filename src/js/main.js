/* Your JS here. */
const modal = document.getElementById("modal");
const openBtn = document.getElementById("openModal");
const closeBtn = document.getElementById("closeModal");

openBtn.addEventListener("click", () => {
  modal.style.display = "flex";  
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) slide.classList.add("active");
  });
}


nextBtn.addEventListener("click", () => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
});


prevBtn.addEventListener("click", () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
});


const navbar = document.getElementById("navbar");
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    document.body.classList.add("scrolled");
  } else {
    document.body.classList.remove("scrolled");
  }

  let current = "";
  sections.forEach((sec) => {
    const sectionTop = sec.offsetTop - 80; 
    const sectionHeight = sec.clientHeight;
    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      current = sec.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

navLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const targetId = link.getAttribute("href").substring(1);
    const target = document.getElementById(targetId);
    target.scrollIntoView({ behavior: "smooth" });
  });
});

const modalTriggers = document.querySelectorAll(".more-btn");
const modals = document.querySelectorAll(".modal");
const closes = document.querySelectorAll(".modal .close");

modalTriggers.forEach(btn => {
  btn.addEventListener("click", () => {
    const target = document.getElementById(btn.dataset.modal);
    target.style.display = "flex";
  });
});

closes.forEach(close => {
  close.addEventListener("click", () => {
    close.parentElement.parentElement.style.display = "none";
  });
});

window.addEventListener("click", (e) => {
  modals.forEach(modal => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});

const youtubeBtn = document.getElementById("openYoutube");
const youtubeModal = document.getElementById("youtubeModal");

youtubeBtn.addEventListener("click", () => {
  youtubeModal.style.display = "flex";
});

const youtubeClose = youtubeModal.querySelector(".close");
youtubeClose.addEventListener("click", () => {
  youtubeModal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === youtubeModal) {
    youtubeModal.style.display = "none";
  }
});