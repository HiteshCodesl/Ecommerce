/users/register  

The backend exposes a /users/register endpoint for user registration. This endpoint accepts a POST request with the following fields in the request body:

username: A string with a minimum length of 2 characters.
email: A valid email address.
password: A string with a minimum length of 6 characters.
User Registration
To register a new user, send a POST request to /users/register with the required fields. The backend will validate the input and create a new user in the database if the input is valid and the user does not already exist.

Validation Criteria
username: Must be at least 2 characters long.
email: Must be a valid email address.
password: Must be at least 6 characters long.

Example Request
{
  "username": "john_doe",
  "email": "john@example.com",
  "password": "securepassword123"
}