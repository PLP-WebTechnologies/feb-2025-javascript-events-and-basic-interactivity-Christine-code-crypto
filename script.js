// Event Handling
document.getElementById("clickBtn").addEventListener("click", () => {
  alert("You clicked the button! 🎉");
});

const hoverBox = document.getElementById("hoverBox");
hoverBox.addEventListener("mouseover", () => hoverBox.style.backgroundColor = "lightblue");
hoverBox.addEventListener("mouseout", () => hoverBox.style.backgroundColor = "white");

document.getElementById("keypressInput").addEventListener("keydown", (e) => {
  console.log("Key pressed:", e.key);
});

document.getElementById("secretBtn").addEventListener("dblclick", () => {
  alert("🎊 You found the secret double-click!");
});

// Interactive Elements
const changeBtn = document.getElementById("changeBtn");
changeBtn.addEventListener("click", () => {
  changeBtn.textContent = "Changed!";
  changeBtn.style.backgroundColor = "#27ae60";
});

const images = [
  "https://via.placeholder.com/300?text=Image+1",
  "https://via.placeholder.com/300?text=Image+2",
  "https://via.placeholder.com/300?text=Image+3"
];
let imgIndex = 0;
const galleryImg = document.getElementById("galleryImg");
document.getElementById("nextImg").addEventListener("click", () => {
  imgIndex = (imgIndex + 1) % images.length;
  galleryImg.src = images[imgIndex];
});

document.querySelectorAll(".tab-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".tab-content").forEach(c => c.classList.add("hidden"));
    document.getElementById(`tab-content-${btn.dataset.tab}`).classList.remove("hidden");
  });
});

// Form Validation
const form = document.getElementById("signupForm");
const email = document.getElementById("email");
const password = document.getElementById("password");
const feedback = document.getElementById("feedback");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let messages = [];

  if (!email.value.includes("@") || !email.value.includes(".")) {
    messages.push("Please enter a valid email.");
  }

  if (password.value.length < 8) {
    messages.push("Password must be at least 8 characters.");
  }

  if (messages.length > 0) {
    feedback.textContent = messages.join(" ");
    feedback.style.color = "red";
  } else {
    feedback.textContent = "Form submitted successfully! ✅";
    feedback.style.color = "green";
  }
});

password.addEventListener("input", () => {
  if (password.value.length < 8) {
    feedback.textContent = "Password is too short!";
    feedback.style.color = "orange";
  } else {
    feedback.textContent = "";
  }
});
