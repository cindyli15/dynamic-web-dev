const express = require("express");
const path = require("path");
const Replicate = require("replicate");

const app = express();
const port = process.env.PORT || 3000;

// Set up static file serving from the "public" folder
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json({ limit: "2MB" }));

console.log(process.env["replicate_key"]);
// API endpoint for generating an image
app.post("/api/generateImage", async (req, res) => {
  try {
    const replicate = new Replicate();
    const input = {
      image: req.body.canvasData, // Use the received canvas data URL as the input image

      prompt: "elegant petroglyph carved on the wall",
    };
    const output = await replicate.run(
      "jagilley/controlnet-scribble:435061a1b5a4c1e26740464bf786efdfa9cb3a3ac488595a2de23e143fdb0117",
      { input },
    );
    console.log(output);

    res.json(output);
  } catch (error) {
    console.error("Error generating image:", error);
    res
      .status(500)
      .json({ error: "An error occurred while generating the image." });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
