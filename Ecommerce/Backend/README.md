# Ecommerce Backend

## Getting Started

To get started with the project, follow these steps:

1) Clone the repository.
2) Navigate to the Backend directory and run npm install to install the backend dependencies.
3) Navigate to the Frontend directory and run npm install to install the frontend dependencies.
4) Create a .env file in the Backend directory with the necessary environment variables.
5) Start the backend server by running node server.js in the Backend directory.
6) Start the frontend development server by running npm run dev in the Frontend directory.

## Environment Variables

The backend requires the following environment variables:

- `PORT`: The port on which the backend server will run.
- `MONGO_URL`: The MongoDB connection string.
- `JWT_SECRET`: The secret key for signing JWT tokens

## Backend

### Routes

The backend exposes a `/users/register` endpoint for user registration. This endpoint accepts a POST request with the following fields in the request body:

- `username`: A string with a minimum length of 2 characters.
- `email`: A valid email address.
- `password`: A string with a minimum length of 6 characters.

### User Registration

To register a new user, send a POST request to `/users/register` with the required fields. The backend will validate the input and create a new user in the database if the input is valid and the user does not already exist.

### Validation Criteria

- `username`: Must be at least 2 characters long.
- `email`: Must be a valid email address.
- `password`: Must be at least 6 characters long.

### Example Request

```json
{
  "username": "john_doe",
  "email": "john@example.com",
  "password": "securepassword123"
}