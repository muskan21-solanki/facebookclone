document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
        document.getElementById("main-text").classList.add("hide"); // Hide "FACEBOOK"

        setTimeout(() => {
            document.getElementById("sub-text").classList.add("show"); // Show "WELCOME" + "Start your journey"

            setTimeout(() => {
                window.location.href = "index.html"; // Redirect to index.html
            }, 1000); // Wait 2 sec before redirecting

        }, 1000); // Delay 1 sec before showing "WELCOME"

    }, 3000); // Display "FACEBOOK" for 3 sec
});
