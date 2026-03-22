(function () {
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  document.querySelectorAll(".nav-list a").forEach(function (a) {
    a.addEventListener("click", function () {
      if (nav && nav.classList.contains("is-open")) {
        nav.classList.remove("is-open");
        if (toggle) toggle.setAttribute("aria-expanded", "false");
      }
    });
  });

  /* Primary nav: black pill follows current page/section */
  var page = document.body.getAttribute("data-page");
  var navLinks = document.querySelectorAll(".nav-list a[data-nav]");
  if (page && navLinks.length) {
    navLinks.forEach(function (a) {
      if (a.getAttribute("data-nav") === page) {
        a.setAttribute("aria-current", "page");
      } else {
        a.removeAttribute("aria-current");
      }
    });
  }

  var header = document.querySelector(".site-header");
  function onScroll() {
    if (header) {
      if (window.scrollY > 16) header.classList.add("is-scrolled");
      else header.classList.remove("is-scrolled");
    }
  }

  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var revealEls = document.querySelectorAll(".reveal");
  if (!reduceMotion && "IntersectionObserver" in window && revealEls.length) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        });
      },
      { root: null, rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );
    revealEls.forEach(function (el) {
      io.observe(el);
    });
  } else {
    revealEls.forEach(function (el) {
      el.classList.add("is-visible");
    });
  }

  var heroPhrases = ["Front-end Developer", "Software Developer", "Computer Science student"];
  var typedEl = document.getElementById("hero-typed");
  if (typedEl && !reduceMotion) {
    var phraseIndex = 0;
    var charIndex = 0;
    var deleting = false;
    var pauseUntil = 0;

    function tick(now) {
      if (now < pauseUntil) {
        requestAnimationFrame(tick);
        return;
      }
      var phrase = heroPhrases[phraseIndex];
      if (!deleting) {
        charIndex++;
        typedEl.textContent = phrase.slice(0, charIndex);
        if (charIndex === phrase.length) {
          deleting = true;
          pauseUntil = now + 2200;
        } else {
          pauseUntil = now + 48 + Math.random() * 28;
        }
      } else {
        charIndex--;
        typedEl.textContent = phrase.slice(0, Math.max(0, charIndex));
        if (charIndex <= 0) {
          deleting = false;
          phraseIndex = (phraseIndex + 1) % heroPhrases.length;
          pauseUntil = now + 500;
        } else {
          pauseUntil = now + 22;
        }
      }
      requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  } else if (typedEl) {
    typedEl.textContent = heroPhrases[0];
  }
})();
