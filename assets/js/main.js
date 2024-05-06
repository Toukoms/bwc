function redirectTo(path) {
  window.location.href = "http://localhost:5500" + path;
}

// Animation loading when page on load
window.addEventListener("load", () => {
  const loading = document.getElementsByClassName("loading")[0];
  const html = document.getElementsByTagName("html")[0];
  loading.classList.remove("active");
  html.style.overflowY = "scroll";
});

// window.addEventListener("scroll", () => {
//   const about = document.getElementsByClassName("about")[0];
//   const contact = document.getElementsByClassName("contact")[0];
//   const hero = document.getElementsByClassName("hero")[0];

//   if (640 < window.scrollY && window.scrollY < 1280) {
//     hero.classList.remove("active");
//     about.classList.add("active");
//     contact.classList.remove("active");
//   } else if (window.scrollY > 1280) {
//     hero.classList.remove("active");
//     about.classList.remove("active");
//     contact.classList.add("active");
//   } else {
//     hero.classList.add("active");
//     about.classList.remove("active");
//     contact.classList.remove("active");
//   }
// })

const sections = document.querySelectorAll("section");
const links = document.querySelectorAll("header nav a");

console.log(sections);

const observer = new IntersectionObserver((entries) => {
  console.log(entries);
  entries.forEach((entry, i) => {
    if (entry.intersectionRatio > 0.9) {
      links.forEach((link) => {
        link.classList.remove("active");
        if (link.classList.contains(entry.target.id)) {
          link.classList.add("active");
        }
      });
    }
  });
});

sections.forEach((section) => {
  observer.observe(section);
});
