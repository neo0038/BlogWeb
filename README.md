# Blog Web Application

This is a full-stack web application designed for creating, reading, updating, and deleting blog posts. The application is built with a modern tech stack to provide a smooth and user-friendly experience for both readers and writers.

## Overview
This project is developed using **Node.js**, **Express.js**, **MongoDB**, and **EJS**. It includes features like article creation with a markdown editor, SEO-friendly URLs with slugs, and a responsive design that ensures usability across different devices.

## Features
- **CRUD Operations**: 
  - Create, Read, Update, and Delete articles with ease.
- **SEO-friendly URLs**: 
  - Uses slugs instead of IDs for article URLs, improving SEO and readability.
- **Markdown Support**: 
  - Write articles in markdown and render them as HTML for a rich text experience.
- **Responsive Design**: 
  - Ensures the application is accessible and functional on both desktop and mobile devices.
- **Form Validation**: 
  - Ensures all necessary fields are filled before submission, preventing errors and incomplete data.
- **Error Handling**: 
  - Handles errors gracefully, providing clear feedback to the user.

## Tech Stack
- **Backend**: 
  - Node.js, Express.js, MongoDB with Mongoose, Method-Override middleware.
- **Frontend**: 
  - EJS (Embedded JavaScript) for templating, Bootstrap for styling.

## Installation
To run this project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/neo0038/BlogWeb.git
   cd BlogWeb
Install dependencies:

npm install
Set up the MongoDB database:

Ensure MongoDB is installed and running on your local machine.
The application connects to a local MongoDB instance using the default settings.
Run the application:


npm start
The application will be accessible at http://localhost:5000.

Usage
Homepage:
View all articles, sorted by creation date.
New Article:
Create a new blog post using the 'New Article' button.
Edit/Delete Article:
Edit or delete an existing article using the options on the article page.
View Article:
Click on an article title to view the full content.
Folder Structure
/models:
Contains the Mongoose model for articles.
/routes:
Contains the Express router that handles all article-related routes.
/views:
Contains EJS templates for different pages (e.g., index, new, edit, show).
app.js:
The main application file where Express is set up and configured.
Contributing
If you'd like to contribute to this project, please fork the repository and use a feature branch. Pull requests are warmly welcome.
