document.addEventListener("DOMContentLoaded", function () {
    const toggleButtons = document.querySelectorAll(".toggle-btn");

    // Add click event to each "Click to know more" button
    toggleButtons.forEach(button => {
        button.addEventListener("click", function () {
            const newsBox = this.parentElement;
            const extraContent = newsBox.querySelector(".extra-content");

            if (extraContent.style.display === "none" || extraContent.style.display === "") {
                extraContent.style.display = "block"; // Show extra content
                newsBox.classList.add("expanded");
                this.textContent = "Show less";
            } else {
                extraContent.style.display = "none"; // Hide extra content
                newsBox.classList.remove("expanded");
                this.textContent = "Click to know more";
            }
        });
    });
});
