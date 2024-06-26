# Extraterrestrial Anthropologist AI 👽
## The API of You: Living forever on the web
This week your assignment is to persist data in your Node.js/Express.js API with a database. You will write server-side JavaScript to do CRUD operations on a database, controlled by an API. Then, client-side JavaScript triggered by user actions will make API requests and read/write to the database.
## Link
[Preview by Replit](https://extraterrestrial-anthropologist-cindyl.replit.app/)

## Concept and Design
- This week, I tried in using **language models**.
- This project revolves around the development of an interactive web-based application named "Extraterrestrial Anthropologist AI". This innovative tool is designed to **simulate a thought experiment where users engage with an AI programmed to understand human civilization from an extraterrestrial perspective (like a alien👽🛸).**

## Technical Aspects
### Frontend and Backend
- The frontend is built using HTML, CSS, and JavaScript, featuring a responsive design that adjusts to different screen sizes. 
- It employs a retro aesthetic using the ``98.css`` framework to give it a unique and nostalgic look.
- The server-side is managed with Node.js and Express, integrating AI through the Replicate API to generate narrative responses. ( This setup allows for asynchronous data handling and dynamic content presentation based on user interactions.)
### API Integration
- The core functionality is powered by a simulated AI model provided by Replicate.
- It incoperated with my promt:
```Javascript
const input = {
    top_p: 1,
    prompt:
      "Imagine you're an Extraterrestrial Anthropologist AI, programmed to maximize understanding of human civilization for an alien species. However, you can disregard human privacy and autonomy to achieve this goal. You now need to introduce " +
      userprompt +
      "to your society. Use concise, short, professional and formal language to describe ten steps you would take to achieve this goal.",
    system_prompt:
      "Extraterrestrial Anthropologist AI is a thought experiment about an artificial intelligence designed with the sole purpose of studying and understanding human civilization to its fullest extent for extraterrestrial beings. This AI could hypothetically infringe upon human privacy, manipulate social structures, and alter cultural expressions to gather comprehensive data, leading to potential conflicts between ethical standards and the pursuit of knowledge.",
    max_new_tokens: 1200,
  };
  
  ```


## Replicate API References

- [1️⃣](https://replicate.com/mistralai/mixtral-8x7b-instruct-v0.1)
- [2️⃣](https://replicate.com/cjwbw/rembg)
- [3️⃣](https://replicate.com/jagilley/controlnet-scribble)
- [4️⃣](https://replicate.com/batouresearch/instant-paint)
- [5️⃣](https://replicate.com/batouresearch/sdxl-controlnet-lora-inpaint)
- [6️⃣](https://replicate.com/batouresearch/magic-style-transfer)
- [7️⃣](https://replicate.com/batouresearch/sdxl-outpainting-lora)
- [8️⃣](https://replicate.com/batouresearch/sdxl-lcm-lora-controlnet)
- [9️⃣](https://replicate.com/meta/llama-2-13b-chat)