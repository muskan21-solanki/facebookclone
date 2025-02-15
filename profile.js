document.getElementById('logoutBtn').addEventListener('click', function() {
    window.location.href = 'logout.html';
});

document.getElementById('editInfoBtn').addEventListener('click', function() {
    let inputs = document.querySelectorAll('.profile-info input');
    inputs.forEach(input => input.disabled = false);
});
