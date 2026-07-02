/* Adonis T Mushonga — bespoke portfolio interactions */
(function () {
  "use strict";
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* Current year */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* Nav: shrink/blur on scroll */
  var nav = document.getElementById("nav");
  function onScroll() {
    if (window.scrollY > 40) nav.classList.add("scrolled");
    else nav.classList.remove("scrolled");
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* Hero reveal on load */
  var hero = document.getElementById("hero");
  requestAnimationFrame(function () {
    requestAnimationFrame(function () { if (hero) hero.classList.add("in"); });
  });

  /* Scroll reveals */
  var revealEls = document.querySelectorAll("[data-reveal]");
  if ("IntersectionObserver" in window && !reduce) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("in"); });
  }

  /* Active nav link by section */
  var links = Array.prototype.slice.call(document.querySelectorAll('.nav__links a[href^="#"]'));
  var sections = links
    .map(function (l) { var id = l.getAttribute("href").slice(1); return document.getElementById(id); })
    .filter(Boolean);
  if ("IntersectionObserver" in window && sections.length) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          links.forEach(function (l) {
            l.classList.toggle("active", l.getAttribute("href") === "#" + e.target.id);
          });
        }
      });
    }, { threshold: 0.5 });
    sections.forEach(function (s) { spy.observe(s); });
  }

  /* Cursor-following work preview */
  var preview = document.getElementById("workPreview");
  var previewImg = preview ? preview.querySelector("img") : null;
  var rows = document.querySelectorAll(".work-row");
  var canHover = window.matchMedia("(hover: hover)").matches;
  if (preview && previewImg && canHover && !reduce) {
    var tx = 0, ty = 0, cx = 0, cy = 0, raf = null, active = false;
    function loop() {
      cx += (tx - cx) * 0.18;
      cy += (ty - cy) * 0.18;
      preview.style.left = cx + "px";
      preview.style.top = cy + "px";
      if (active || Math.abs(tx - cx) > 0.5 || Math.abs(ty - cy) > 0.5) {
        raf = requestAnimationFrame(loop);
      } else { raf = null; }
    }
    rows.forEach(function (row) {
      row.addEventListener("mouseenter", function () {
        var src = row.getAttribute("data-thumb");
        if (src) previewImg.setAttribute("src", src);
        active = true;
        preview.classList.add("show");
        if (!raf) raf = requestAnimationFrame(loop);
      });
      row.addEventListener("mousemove", function (ev) { tx = ev.clientX; ty = ev.clientY; });
      row.addEventListener("mouseleave", function () {
        active = false;
        preview.classList.remove("show");
      });
    });
  }

  /* Magnetic buttons (subtle) */
  if (canHover && !reduce) {
    document.querySelectorAll(".btn").forEach(function (btn) {
      btn.addEventListener("mousemove", function (e) {
        var r = btn.getBoundingClientRect();
        var mx = e.clientX - r.left - r.width / 2;
        var my = e.clientY - r.top - r.height / 2;
        btn.style.transform = "translate(" + mx * 0.15 + "px," + my * 0.25 + "px)";
      });
      btn.addEventListener("mouseleave", function () { btn.style.transform = ""; });
    });
  }
})();
