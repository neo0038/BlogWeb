Blog Web ApplicationOverview

This is a full-stack web application designed for creating, reading, updating, and deleting blog posts. 

The project is built using Node.js, Express.js, MongoDB, and EJS. 

It includes features like article creation with a markdown editor, SEO-friendly URLs with slugs, and a responsive design.

FeaturesCRUD Operations:

Create, Read, Update, and Delete

1. articles.SEO-friendly URLs: Uses slugs instead of IDs for article URLs.

2. Markdown Support: Write articles in markdown and render them as HTML.

3. Responsive Design: Ensures usability across different devices.

4. Form Validation: Ensures all necessary fields are filled before submission.

5. Error Handling: Handles errors gracefully, providing feedback to the user.

Tech Stack

Backend:
Node.js, Express.js, MongoDB with Mongoose, Method-Override middleware.

Frontend:
EJS (Embedded JavaScript) for templating.
Bootstrap for styling.

Installation:
To run this project locally, follow these steps:

Clone the repository:
 git clone https://github.com/neo0038/BlogWeb.git
cd BlogWeb

Install dependencies:
npm install

Set up the MongoDB database:
Make sure MongoDB is installed and running on your local machine.
The application connects to a local MongoDB instance using the default settings.

Run the application:
npm startThe application will be accessible at http://localhost:5000.

Usage
Homepage:View all articles, sorted by creation date.
New Article: Create a new blog post using the 'New Article' button.
Edit/Delete Article: Edit or delete an existing article using the options on the article page.
View Article: Click on an article title to view the full content.
Folder Structure/models: Contains the Mongoose model for articles.
/routes: Contains the Express router that handles all article-related routes.
/views: Contains EJS templates for different pages (e.g., index, new, edit, show).
app.js: The main application file where Express is set up and configured.

Contributing:
If you'd like to contribute to this project, please fork the repository and use a feature branch. Pull requests are warmly welcome.