/* =========================
   Reading Progress Bar
========================= */

const progressBar = document.getElementById("progress-bar");

function updateProgressBar() {
  const scrollTop =
    document.documentElement.scrollTop || document.body.scrollTop;

  const scrollHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  const scrolled = (scrollTop / scrollHeight) * 100;

  if (progressBar) {
    progressBar.style.width = `${scrolled}%`;
  }
}

window.addEventListener("scroll", updateProgressBar);

/* =========================
   Newsletter Form Handling
========================= */

const form = document.getElementById("newsletter-form");
const successMsg = document.getElementById("success-msg");
const submitBtn = document.getElementById("submit-btn");
const emailInput = document.getElementById("email-input");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = emailInput.value.trim();

    // Simulate API call
    submitBtn.textContent = "Joining...";
    submitBtn.disabled = true;

    setTimeout(() => {
      form.classList.add("hidden");
      successMsg.classList.remove("hidden");

      console.log(`User subscribed with: ${email}`);
    }, 1500);
  });
}
