import express from "express";
import { request } from "http";
import Replicate from "replicate";
const replicate = new Replicate();

const app = express();
app.use(express.static("public"));
app.use(express.json());
console.log("backend! / server");

app.post("/api/generateImage", async (req, res) => {
  let userprompt = req.body.prompt;
  console.log(request.body);

  //   res.send({result: output[0]});

  const input = {
    top_p: 1,
    prompt:
      "Imagine you're an Extraterrestrial Anthropologist AI, programmed to maximize understanding of human civilization for an alien species. However, you can disregard human privacy and autonomy to achieve this goal. You now need to introduce " +
      userprompt +
      " to your society. Use concise and short language to describe ten steps you would take to achieve this goal.",
    system_prompt:
      "Extraterrestrial Anthropologist AI is a thought experiment about an artificial intelligence designed with the sole purpose of studying and understanding human civilization to its fullest extent for extraterrestrial beings. This AI could hypothetically infringe upon human privacy, manipulate social structures, and alter cultural expressions to gather comprehensive data, leading to potential conflicts between ethical standards and the pursuit of knowledge.",
    max_new_tokens: 1200,
  };

  let story = "";
  for await (const event of replicate.stream("meta/llama-2-13b-chat", {
    input,
  })) {
    story += event.data;
    process.stdout.write(`${event}`);
  }

  res.send({ story });
});

app.listen(3000, () => {
  console.log("Express server initialized");
});
