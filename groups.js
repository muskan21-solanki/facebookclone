document.addEventListener("DOMContentLoaded", function () {
    // Select all join buttons
    const joinButtons = document.querySelectorAll(".join-btn");

    joinButtons.forEach(button => {
        button.addEventListener("click", function () {
            // Check if the message already exists
            if (this.nextElementSibling && this.nextElementSibling.classList.contains("join-message")) {
                return;
            }

            // Create message container
            const messageContainer = document.createElement("div");
            messageContainer.classList.add("join-message");
            messageContainer.innerHTML = `<strong>GROUP JOINED</strong><br>WELCOME TO THE GROUP!`;
            
            // Style the message
            messageContainer.style.color = "#4267B2";
            messageContainer.style.fontSize = "16px";
            messageContainer.style.marginTop = "5px";
            messageContainer.style.fontWeight = "bold";

            // Insert message below the button
            this.parentElement.appendChild(messageContainer);

            // Disable the button after joining
            this.disabled = true;
            this.textContent = "Joined";
            this.style.backgroundColor = "#ccc";
        });
    });
});
