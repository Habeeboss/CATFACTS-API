HNGi13 Backend Stage 0 Task CATFACTS-API

This is a simple RESTful API built for the HNG Internship (Stage 0 — Backend)** task.  
The API returns your profile information along with a random cat fact fetched dynamically from the Cat Facts API (https://catfact.ninja/).

Live Endpoint
Base URL
"https://catfacts-api-production.up.railway.app/me"

Technologies Used

Node.js
Express.js
Axios — for fetching external API data
dotenv — for environment variable management
CORS — to enable secure cross-origin access
Railway — for deployment

Setup and Installation (Local)
Follow these steps to run the project locally on your computer.

Clone the repository "git clone https://github.com/Habeeboss/CATFACTS-API.git"
Navigate into the project directory "cd CATFACTS-API"

To install all dependencies:
npm install express axios dotenv cors

In the root of the project, create a .env file with the following variables:

USER_EMAIL="youe email"
USER_NAME="your name"
USER_STACK="Node.js/Express or any other stack you are familiar with"
PORT=1025

Run the application: "node index.js"
The API will start locally and be available at: "http://localhost:1025/me"

This project is deployed using Railway
in the Procfile (Process file)
web: node index.js

Environment Variables on Railway
USER_EMAIL
USER_NAME
USER_STACK
PORT


Author
Habeeb Olakunle
Email: sannihabeebo30@gmail.com

Stack: Node.js / Express
GitHub: @Habeeboss
Live App: https://catfacts-api-production.up.railway.app/me
