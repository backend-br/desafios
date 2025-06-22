const express = require('express');
const app = express();

// Middleware to parse JSON request body
app.use(express.json());

app.post("/validate-password", (req, res) => {
    const password = req.body.password;
    const errors = [];

    if (!password) {
        return res.status(400).json({ errors: ["Password not provided"] });
    }

    if (password.length < 8) {
        errors.push("Password must be at least 8 characters long");
    }
    if (!/[a-z]/.test(password)) {
        errors.push("Password must contain at least one lowercase letter");
    }
    if (!/[A-Z]/.test(password)) {
        errors.push("Password must contain at least one uppercase letter");
    }
    if (!/[0-9]/.test(password)) {
        errors.push("Password must contain at least one numeric digit");
    }
    if (!/[@!#$%&*]/.test(password)) {
        errors.push("Password must contain at least one special character (@!#$%&*)");
    }

    if (errors.length > 0) {
        return res.status(400).json({ errors });
    }

    // Password is valid
    return res.status(204).send();
});

app.listen(8081, () => {
    console.log("Application is running on port 8081");
});
