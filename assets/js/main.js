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

const sections = document.querySelectorAll("section");
const links = document.querySelectorAll("header nav a");


const observer = new IntersectionObserver((entries) => {
  console.log(entries);
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      sections.forEach((section) => { section.classList.remove("animate") })
      entry.target.classList.add("animate")
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
