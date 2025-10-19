This repository contains the solution for the HNG Internship (Stage 0 – Backend) task for October 2025.  
The HNG-CATFACTS-API is a simple yet functional RESTful API built with Node.js and Express.js. Its primary purpose is to serve a user's profile information, a dynamic timestamp, and an engaging random cat fact. The cat fact is fetched dynamically from the external [Cat Facts API](https://catfact.ninja/).
This project demonstrates foundational backend development skills, including API creation, routing, external API integration, and handling dynamic data.
	
  User Profile Information: Returns predefined user details (email, name, stack).
	Dynamic Timestamp: Provides the current timestamp with each request.
	External API Integration: Fetches a random cat fact from `https://catfact.ninja/`.
	RESTful Design: Exposes a clear endpoint for data retrieval.
	
Endpoint	
GET '/me'
This endpoint returns a JSON object containing user details, a dynamic timestamp, and a random cat fact.
	
Example Response
json
	{
	  "status": "success",
	  "user": {
	    "email": "Zeroberto@gmail.com",
	    "name": "roberto julius",
	    "stack": "Node.js/Express"
	  },
	  "timestamp": "2025-10-18T20:24:55.681Z",
	  "fact": "A cat has the power to sometimes heal themselves by purring..."
	}
	```
	🛠️ Technologies Used	
Node.js**
Express.js**
Axios** (likely for fetching external API data, though not explicitly mentioned, it's common)
	
Author
Habeeb Olakunle
