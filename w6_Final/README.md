# FINAL PROJECT🥵
## Functionality
### Front-end (main.js):
- Event listener for the button to fetch a response from a server endpoint using POST request.
- Asynchronous fetch to handle server responses and update the UI accordingly.
- Error handling for fetch operations.
### Back-end (Node.js with Express):
- Serving static files and handling JSON body parsing.
- Endpoint /api/generateImage that processes input, interacts with an external AI API (Replicate), and sends back a response.
- Streaming responses from the Replicate API, constructing a story dynamically.
- Listening on port 3000, confirming server initialization in the console.