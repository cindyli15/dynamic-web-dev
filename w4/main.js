let canvas = document.getElementById("bigCanvas");
let ctx = canvas.getContext("2d");

canvas.width = 500;
canvas.height = 500;

ctx.fillStyle = "hsl(0, 20%, 100%)";
ctx.fillRect(0, 0, canvas.width, canvas.height);

let loadedData = JSON.parse(localStorage.getItem("save"));
if (loadedData) {
  var img = new Image();
  img.src = loadedData;
  img.onload = () => {
    ctx.drawImage(img, 0, 0);
  };
}

let resetBtn = document.getElementById("reset");

resetBtn.addEventListener("click", () => {
  ctx.fillStyle = "hsl(0, 20%, 100%)"; // green
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  localStorage.setItem("save", null);
});
function saveState() {
  // save to localstorage
  let cellData = canvas.toDataURL("image/png");
  let dataString = JSON.stringify(cellData);
  console.log("saving the state");
  localStorage.setItem("save", dataString);
}

let isDrawing = false;
let lastX = null;
let lastY = null;

function distance(aX, aY, bX, bY) {
  return Math.sqrt(Math.pow(aX - bX, 2) + Math.pow(aY - bY, 2));
}
function pointsAlongLine(startx, starty, endx, endy, spacing) {
  let dist = distance(startx, starty, endx, endy);
  let steps = dist / spacing;

  let points = [];
  for (var d = 0; d <= 1; d += 1 / steps) {
    let point = {
      x: startx * d + endx * (1 - d),
      y: starty * d + endy * (1 - d),
    };
    points.push(point);
  }
  return points;
}

function drawStart(x, y) {
  isDrawing = true;
  const rect = canvas.getBoundingClientRect();
  const scaleX = canvas.width / rect.width;
  const scaleY = canvas.height / rect.height;
   x = (x - rect.left) * scaleX;
   y = (y - rect.top) * scaleY;
  lastX = x;
  lastY = y;
}

function rand() {
  return Math.random() - 0.5;
}
function drawMove(x, y) {
  if (isDrawing === false) {
    return;
  }

  let speed = distance(x, y, lastX, lastY);
  let spread = 0.5 * speed;
  spread = Math.min(spread, 10);
  const rect = canvas.getBoundingClientRect();

  const scaleX = canvas.width / rect.width;
  const scaleY = canvas.height / rect.height;
  x = (x - rect.left) * scaleX;
  y = (y - rect.top) * scaleY;

  let points = pointsAlongLine(x, y, lastX, lastY, Math.max(spread * 0.5, 2));

  points.forEach((point) => {
    // draw cloud
    for (let i = 0; i < 4 * speed; i++) {
      ctx.fillStyle = `hsla(0, 10%, 0%, 0.6)`;
      ctx.fillRect(point.x + rand() * spread, point.y + rand() * spread, 1, 1);
    }
  });

  lastX = x;
  lastY = y;
}
function drawEnd() {
  if (isDrawing) {
    saveState();
  }
  isDrawing = false;
}

canvas.addEventListener("pointerdown", (event) => {
  drawStart(event.pageX, event.pageY);
});

canvas.addEventListener("pointerup", (event) => {
  drawEnd();
});

canvas.addEventListener("pointermove", (event) => {
  drawMove(event.pageX, event.pageY);
});

let genButton = document.getElementById("generate");

genButton.addEventListener("click", async () => {
  try {
    // Make a POST request to the api/generateImage endpoint
    const response = await fetch("/api/generateImage", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        canvasData: canvas.toDataURL(),
      }),
    });

    if (response.ok) {
      const data = await response.json();
      const imageUrl = data[1]; // Assuming the generated image URL is in the response data

      // Load the generated image
      let resultImg = document.getElementById("result");
      resultImg.src = imageUrl;
      resultImg.onload = function () {
        // Clear the canvas
        // ctx.clearRect(0, 0, canvas.width, canvas.height);
        // // Draw the generated image on the canvas
        // ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
      };
    } else {
      console.error("Error generating image:", response.statusText);
      // Handle the error, e.g., display an error message to the user
    }
  } catch (error) {
    console.error("Error generating image:", error);
    // Handle the error, e.g., display an error message to the user
  }
});
