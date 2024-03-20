const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Använd en enkel array för att lagra användare
const users = [
    { username: 'admin', password: 'admin123' },
    { username: 'user', password: 'user123' }
];

// Middleware för att tolka JSON i inkommande förfrågningar
app.use(bodyParser.json());

// POST-förfrågan för inloggning
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        res.sendStatus(200);
    } else {
        res.status(401).send('Invalid username or password');
    }
});

// Servern lyssnar på angiven port
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
