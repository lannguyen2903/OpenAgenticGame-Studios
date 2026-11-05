/* OpenAgenticGame Studios — landing interactions + Supabase waitlist */
(function () {
  "use strict";

  // ---- Supabase (public anon key, RLS: insert-only on waitlist) ----
  var SUPABASE_URL = "https://xelpebpyebfwapwseesu.supabase.co";
  var SUPABASE_ANON_KEY =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhlbHBlYnB5ZWJmd2Fwd3NlZXN1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTM4OTcxNjYsImV4cCI6MjEwOTQ3MzE2Nn0.qoaaTCo80JQAJJ6qmP3f4WQtZ0b4tkU7CoAoq-DLwaY";

  var EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  // ---- Mobile nav ----
  var toggle = document.getElementById("navToggle");
  var links = document.getElementById("navLinks");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    links.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        links.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  // ---- Reveal on scroll ----
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("visible"); });
  }

  // ---- Waitlist form ----
  var form = document.getElementById("waitlistForm");
  var statusEl = document.getElementById("formStatus");
  var btn = document.getElementById("waitlistBtn");

  function setStatus(msg, kind) {
    if (!statusEl) return;
    statusEl.textContent = msg;
    statusEl.className = "form-status" + (kind ? " " + kind : "");
  }

  function isValidEmail(v) {
    return EMAIL_RE.test(v) && v.length <= 254;
  }

  async function submitEmail(email) {
    var res = await fetch(SUPABASE_URL + "/rest/v1/waitlist", {
      method: "POST",
      headers: {
        apikey: SUPABASE_ANON_KEY,
        Authorization: "Bearer " + SUPABASE_ANON_KEY,
        "Content-Type": "application/json",
        Prefer: "return=minimal"
      },
      body: JSON.stringify({ email: email })
    });

    if (res.ok) return { ok: true };

    var detail = "";
    try {
      var body = await res.text();
      detail = body.slice(0, 300);
    } catch (e) { /* ignore */ }

    // unique violation → already registered
    if (res.status === 409 || detail.indexOf("23505") !== -1 || detail.indexOf("duplicate") !== -1) {
      return { ok: true, duplicate: true };
    }
    if (res.status === 401 || res.status === 403) {
      return { ok: false, error: "Service unavailable right now. Please try again shortly." };
    }
    return { ok: false, error: "Something went wrong (" + res.status + "). Please try again." };
  }

  if (form) {
    form.addEventListener("submit", async function (e) {
      e.preventDefault();

      var emailInput = document.getElementById("email");
      var honeypot = document.getElementById("website");
      var email = (emailInput && emailInput.value ? emailInput.value : "").trim().toLowerCase();

      // honeypot: silently accept, store nothing
      if (honeypot && honeypot.value) {
        setStatus("You're on the list! 🎉", "ok");
        form.reset();
        return;
      }

      if (!isValidEmail(email)) {
        setStatus("Please enter a valid email address.", "err");
        if (emailInput) emailInput.focus();
        return;
      }

      if (btn) { btn.disabled = true; btn.textContent = "Joining…"; }
      setStatus("");

      try {
        var result = await submitEmail(email);
        if (result.ok) {
          setStatus(
            result.duplicate
              ? "You're already on the list — see you at launch! 🚀"
              : "You're on the list! 🎉 We'll email you on release.",
            "ok"
          );
          form.reset();
        } else {
          setStatus(result.error || "Something went wrong. Please try again.", "err");
        }
      } catch (err) {
        setStatus("Network error — please check your connection and retry.", "err");
      } finally {
        if (btn) { btn.disabled = false; btn.textContent = "Join waitlist"; }
      }
    });
  }
})();
