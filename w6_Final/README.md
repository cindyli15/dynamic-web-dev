# FINAL PROJECT🥵
## Functionality
- The frontend is built using HTML, CSS, and JavaScript, featuring a responsive design that adjusts to different screen sizes. 
- It employs a retro aesthetic using the ``98.css`` framework to give it a unique and nostalgic look.
- The server-side is managed with **Node.j** and **Express**, integrating AI through the [Replicate](https://replicate.com/) API to generate narrative responses. ( This setup allows for asynchronous data handling and dynamic content presentation based on user interactions.)
### Front-end (main.js):
- Event listener for the button to fetch a response from a server endpoint using POST request.
- Asynchronous fetch to handle server responses and update the UI accordingly.
- Error handling for fetch operations.
### Back-end (Node.js with Express):
- Serving static files and handling JSON body parsing.
- Endpoint ```/api/generateImage ``` that processes input, interacts with an external AI API ([Replicate](https://replicate.com/)), and sends back a response.
- Streaming responses from the Replicate API, constructing a story dynamically.
- Listening on port 3000, confirming server initialization in the console.