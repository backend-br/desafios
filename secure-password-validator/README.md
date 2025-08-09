# Secure Password Validator

Simple Node.js + Express API to validate password strength based on:

- Minimum 8 characters
- At least one uppercase letter
- At least one lowercase letter
- At least one digit
- At least one special character (@!#$%&*)

## Usage

This project includes **two versions** of the password validation API to demonstrate different approaches:

- **GET endpoint**: Pass the password as a URL parameter for quick testing and simplicity.
- **POST endpoint**: Pass the password in the JSON body of the request, which is more secure and scalable for real-world applications.

### GET endpoint

Open your browser or Postman and test:


Returns:

- `204 No Content` if valid  
- `400 Bad Request` with errors if invalid

### POST endpoint

Send a JSON payload to:


Returns the same status codes as GET.

## How to run

```bash
npm install
node secure_password_get.js

