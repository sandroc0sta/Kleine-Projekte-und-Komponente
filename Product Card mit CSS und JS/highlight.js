// burger.txt
document.addEventListener("DOMContentLoaded", function () {
    const card = document.getElementById("productCard_section");
    card.addEventListener("click", () => {
        card.classList.toggle("highlight");
    });
});
