import { useEffect } from "react";

/**
 * useScrollReveal — attaches an IntersectionObserver to all elements
 * that have the class `reveal`. When they enter the viewport they get
 * the `visible` class which triggers the CSS transition defined in
 * index.css.  Works perfectly alongside Locomotive Scroll and needs
 * zero GSAP dependency.
 */
const useScrollReveal = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            // Once revealed, stop observing to save resources
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -60px 0px",
      }
    );

    // Observe every .reveal element on the page
    const elements = document.querySelectorAll(".reveal");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
};

export default useScrollReveal;
