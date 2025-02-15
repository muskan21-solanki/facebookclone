function openChat(userName, email) {
    document.getElementById('chat-username').textContent = userName;
    document.getElementById('user-details-name').textContent = userName;
    document.getElementById('user-email').textContent = email;
    document.getElementById('chat-messages').innerHTML = `
        <div class="message received">Hello, how are you?</div>
        <div class="message sent">I'm good! How about you?</div>
    `;
}

function sendMessage() {
    let messageBox = document.getElementById('message-box');
    let messageText = messageBox.value;
    if (messageText.trim() !== '') {
        let chatMessages = document.getElementById('chat-messages');
        chatMessages.innerHTML += `<div class="message sent">${messageText}</div>`;
        messageBox.value = '';
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
}
