document.addEventListener("DOMContentLoaded", function () {
    // Heart Button Click
    document.querySelectorAll(".heart-btn").forEach(button => {
        button.addEventListener("click", function () {
            let postContainer = this.closest(".post");
            let overlayHeart = postContainer.querySelector(".overlay-heart");

            overlayHeart.style.opacity = "1";

            setTimeout(() => {
                overlayHeart.style.opacity = "0";
            }, 2000);
        });
    });

    // Comment Button Toggle
    document.querySelectorAll(".comment-btn").forEach(button => {
        button.addEventListener("click", function () {
            let commentSection = this.closest(".post").querySelector(".comment-section");
            commentSection.style.display = (commentSection.style.display === "none" || commentSection.style.display === "") ? "flex" : "none";
        });
    });

    // Comment Posting Functionality
    document.querySelectorAll(".comment-button").forEach(button => {
        button.addEventListener("click", function () {
            let commentInput = this.previousElementSibling;
            let commentText = commentInput.value.trim();
            
            if (commentText !== "") {
                let postContainer = this.closest(".post");
                let commentsDiv = postContainer.querySelector(".comments");

                let newComment = document.createElement("p");
                newComment.textContent = commentText;
                commentsDiv.appendChild(newComment);

                commentInput.value = "";

                // Shift next post down
                postContainer.style.marginBottom = commentsDiv.scrollHeight + "px";
            }
        });
    });
});
