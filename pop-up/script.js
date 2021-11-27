const btnOpen = document.getElementById("btn-open");
const btnClose = document.getElementById("btn-close");
const container = document.getElementById("container");

btnOpen.addEventListener("click", () => {
    container.classList.add("active");
});

btnClose.addEventListener("click", () => {
    container.classList.remove("active");
});