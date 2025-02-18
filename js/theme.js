const themeButton = document.querySelector(".theme");
const icon = themeButton.querySelector("i");

if (localStorage.getItem("dark-mode") === "enabled") {
  document.documentElement.classList.add("dark");
  icon.classList.replace("bxs-sun", "bxs-moon");
}

themeButton.addEventListener("click", () => {
  if (localStorage.getItem("dark-mode") === "enabled") {
    localStorage.setItem("dark-mode", "disabled");
  } else {
    localStorage.setItem("dark-mode", "enabled");
  }
  document.documentElement.classList.toggle("dark");

  if (document.documentElement.classList.contains("dark")) {
    icon.classList.replace("bxs-sun", "bxs-moon");
  } else {
    icon.classList.replace("bxs-moon", "bxs-sun");
  }
});
