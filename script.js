const navlinks = document.querySelectorAll(".navlink");

navlinks.forEach((link) => {
  link.addEventListener("click", () => {
    const active = document.querySelector(".active-nav");
    active.classList.remove("active-nav");
    link.classList.add("active-nav");
  });
});
