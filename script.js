document.getElementById('loginForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        });

        if (response.ok) {
            window.location.href = '/dashboard.html';
        } else {
            const errorMessage = await response.text();
            document.getElementById('error').textContent = errorMessage;
        }
    } catch (error) {
        console.error('Error:', error);
    }
});
