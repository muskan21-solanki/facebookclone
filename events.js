document.addEventListener("DOMContentLoaded", function () {
    const eventDateInput = document.getElementById("event-date");
    const eventNotesInput = document.getElementById("event-notes");
    const scheduleButton = document.querySelector(".schedule-btn");
    const eventsSidebar = document.querySelector(".events-sidebar");

    // Load stored events from localStorage
    loadStoredEvents();

    // Handle event scheduling
    scheduleButton.addEventListener("click", function () {
        const dateValue = eventDateInput.value;
        const notesValue = eventNotesInput.value.trim();

        if (!dateValue || !notesValue) {
            alert("Please enter both date and notes.");
            return;
        }

        // Format date (YYYY-MM-DD → DD-MM-YYYY)
        const formattedDate = formatDate(dateValue);

        // Create new event box
        const eventBox = createEventElement(notesValue, formattedDate);

        // Add event to the sidebar
        eventsSidebar.appendChild(eventBox);

        // Save event to localStorage
        saveEventToStorage(notesValue, formattedDate);

        // Clear input fields
        eventDateInput.value = "";
        eventNotesInput.value = "";

        // Scroll to the new event
        eventsSidebar.scrollTop = eventsSidebar.scrollHeight;
    });

    // Function to format date (YYYY-MM-DD → DD-MM-YYYY)
    function formatDate(dateStr) {
        const [year, month, day] = dateStr.split("-");
        return `${day}-${month}-${year}`;
    }

    // Function to save event in localStorage
    function saveEventToStorage(eventText, eventDate) {
        let storedEvents = JSON.parse(localStorage.getItem("events")) || [];
        storedEvents.push({ text: eventText, date: eventDate });
        localStorage.setItem("events", JSON.stringify(storedEvents));
    }

    // Function to load events from localStorage
    function loadStoredEvents() {
        let storedEvents = JSON.parse(localStorage.getItem("events")) || [];
        storedEvents.forEach(event => {
            const eventBox = createEventElement(event.text, event.date);
            eventsSidebar.appendChild(eventBox);
        });
    }

    // Function to create event element
    function createEventElement(eventText, eventDate) {
        const eventBox = document.createElement("div");
        eventBox.classList.add("event-box");
        eventBox.innerHTML = `📅 <strong>${eventText}:</strong> ${eventDate}`;

        // Add click event to check if the task is completed
        eventBox.addEventListener("click", function () {
            const confirmBox = confirm("Task completed?");
            if (confirmBox) {
                // Remove event from UI
                eventBox.remove();
                // Remove event from localStorage
                removeEventFromStorage(eventText, eventDate);
            }
        });

        return eventBox;
    }

    // Function to remove event from localStorage
    function removeEventFromStorage(eventText, eventDate) {
        let storedEvents = JSON.parse(localStorage.getItem("events")) || [];
        storedEvents = storedEvents.filter(event => !(event.text === eventText && event.date === eventDate));
        localStorage.setItem("events", JSON.stringify(storedEvents));
    }
});
