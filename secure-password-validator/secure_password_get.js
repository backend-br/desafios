const express = require('express');
const app = express();

app.get("/password/:password", (req, res) => {
    const password = req.params.password;
    const errors = [];

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

    return res.status(204).send(); // No Content (valid password)
});

app.listen(8081, () => {
    console.log("Server is running on port 8081");
});
