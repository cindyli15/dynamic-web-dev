let genButton = document.getElementById("generate");
let input = document.getElementById("input");

console.log("client / frontend! ");

genButton.addEventListener("click", async () => {
  let img = document.getElementById("result");
  img.innerHTML = "...";

  const input = document.getElementById("input");
  let prompt = input.value;
  if (!prompt) {
    prompt = "hype boy";
  }

  const response = await fetch("/api/generateImage", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ prompt }),
  });

  if (response.ok) {
    const data = await response.json();
    console.log(data.result);
    img.innerHTML = data.story;
  } else {
    console.error("Error generating image:", response.statusText);
  }
});
