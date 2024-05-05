function redirectTo(path) {
  window.location.href = "http://localhost:5500" + path;
}

window.addEventListener("scroll", () => {
  console.log(window.scrollY);
  const about = document.getElementsByClassName("about")[0];
  const contact = document.getElementsByClassName("contact")[0];
  const hero = document.getElementsByClassName("hero")[0];

  console.log(window.location.href);
  console.log(640 < window.scrollY < 1280);

  if (640 < window.scrollY && window.scrollY < 1280) {
    hero.classList.remove("active");
    about.classList.add("active");
    contact.classList.remove("active");
  } else if (window.scrollY > 1280) {
    hero.classList.remove("active");
    about.classList.remove("active");
    contact.classList.add("active");
  } else {
    hero.classList.add("active");
    about.classList.remove("active");
    contact.classList.remove("active");
  }
})
