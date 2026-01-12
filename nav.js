document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.getElementById("navToggle");
  const mobileOverlay = document.getElementById("mobileOverlay");
  const mobileLinks = document.querySelectorAll(".mobile-link");
  const body = document.body;

  let isMenuOpen = false;

  const animateIn = () => {
    gsap.fromTo(
      mobileLinks,
      { y: 40, opacity: 0, scale: 0.9, rotate: -2 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        rotate: 0,
        stagger: 0.08,
        duration: 0.4,
        ease: "back.out(1.2)",
      }
    );
  };

  const toggleMenu = () => {
    isMenuOpen = !isMenuOpen;

    navToggle.classList.toggle("is-active", isMenuOpen);
    mobileOverlay.classList.toggle("is-active", isMenuOpen);

    if (isMenuOpen) {
      body.classList.add("no-scroll");
      animateIn();
    } else {
      body.classList.remove("no-scroll");
    }
  };

  navToggle.addEventListener("click", toggleMenu);

  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (isMenuOpen) toggleMenu();
    });
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && isMenuOpen) {
      toggleMenu();
    }
  });

  let lastScroll = 0;
  const nav = document.getElementById("mainNav");
  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll <= 0) {
      nav.style.transform = "translateY(0)";
      return;
    }
    if (currentScroll > lastScroll && !isMenuOpen) {
      nav.style.transform = "translateY(-110%)";
    } else {
      nav.style.transform = "translateY(0)";
    }
    lastScroll = currentScroll;
  });
});
