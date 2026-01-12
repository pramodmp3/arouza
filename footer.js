window.addEventListener("load", () => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.from(".comic-panel", {
    scrollTrigger: { trigger: ".comic-footer", start: "top 90%" },
    y: 50,
    opacity: 0,
    rotate: (i) => (i % 2 === 0 ? -2 : 2),
    duration: 0.8,
    stagger: 0.1,
    ease: "power3.out",
  });

  document.querySelectorAll(".comic-panel").forEach((panel) => {
    panel.addEventListener("mouseenter", () => {
      gsap.to(panel, {
        scale: 1.02,
        rotation: Math.random() * 1 - 0.5,
        duration: 0.3,
        ease: "power2.out",
      });
    });
    panel.addEventListener("mouseleave", () => {
      gsap.to(panel, {
        scale: 1,
        rotation: 0,
        duration: 0.3,
        ease: "power2.inOut",
      });
    });
  });
});
