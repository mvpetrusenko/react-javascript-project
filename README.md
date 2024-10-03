BrightFuture English School Website
This is the repository for the BrightFuture English School website, built using React for the frontend and Node.js for the backend.

Table of Contents
Project Overview
Technologies Used
Installation
Running the Project
Folder Structure
Backend API
Contributing
Project Overview
The BrightFuture English School website serves as an interactive platform to provide information about the school, manage contact forms, and handle inquiries. It includes multiple pages, such as the main page, contact page, about page, and others.

Technologies Used
Frontend
React: A JavaScript library for building user interfaces.
JavaScript (ES6+): Used for writing the logic for components and event handling.
CSS: Used for styling the UI components.
Backend
Node.js: Server-side JavaScript runtime.
Express: A web framework for Node.js, handling backend logic, API routes, and form submissions.
Axios: Used for making HTTP requests from the frontend to the backend.
Installation
Prerequisites
Make sure you have the following installed:

Node.js (>= 14.x)
npm or yarn (Node package manager)
Steps to install 

npm install 
Start the React development server: 
npm start 

The frontend should now be running at http://localhost:3000.

Running the Backend 
Start the Node.js server: 
node server.js 

The backend should now be running at http://localhost:4000.

Backend API
POST /api/endpoint: Handles form submissions from the contact page.
Example Request:

{
  "name": "John Doe",
  "email": "johndoe@example.com",
  "message": "Hello, I have a question."
}

Contributing
If you'd like to contribute, please fork the repository and submit a pull request.