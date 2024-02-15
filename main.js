// colors
const colors = ["blue", "green", "yellow", "lavender", "orange", "purple"];
const rotate = [
  "rotateZ(0)",
  "rotateY(90deg)",
  "rotateZ(180deg)",
  "rotateX(360deg)",
];
const scale = ["scale(1)", "scale(0.5)"];
const translate = ["translateX(200px)", "translateY(200px)", "translateX(300px)"];

const style = {
  width: "100px",
  height: "100px",
  borderRadius: "1px solid black",
  transition: "4s linear",
  margin: "1em",
};

let h1 = document.createElement("h1");
h1.innerHTML = "JavaScript Animation";

//body
let body = document.querySelector("body");
body.style.textAlign = "center";
body.appendChild(h1);
body.style.backgroundColor = colors[3];

// first Object

let box1 = document.createElement("div");
body.appendChild(box1);
box1.style.backgroundColor = colors[1];
box1.style.width = style.width;
box1.style.height = style.height;
box1.style.margin = style.margin;
box1.style.transition = "5s";

// // second Object

let box2 = document.createElement("div");
body.appendChild(box2);
box2.style.backgroundColor = colors[0];
box2.style.width = style.width;
box2.style.height = style.height;
box2.style.margin = style.margin;
box2.style.transition = "5s";

// // Third Object

let box3 = document.createElement("div");
body.appendChild(box3);
box3.style.backgroundColor = colors[4];
box3.style.width = style.width;
box3.style.height = style.height;
box3.style.margin = style.margin;
box3.style.transition = "5s";

// buttons
const startBtn = document.createElement("button");
startBtn.innerText = "Start Animation";
startBtn.style.padding = "10px";
startBtn.style.margin = "10px";
startBtn.style.color = "white";
startBtn.style.border = "none";
startBtn.style.backgroundColor = "blue";
startBtn.style.border = "3px solid black";

// stop button
const stopBtn = document.createElement("button");
stopBtn.innerText = "Stop Animation";
stopBtn.style.padding = "10px";
let bg = stopBtn.style;
stopBtn.style.color = "white";
stopBtn.style.border = "none";
bg.backgroundColor = "red";
bg.border = "3px solid black";

body.appendChild(startBtn);
body.appendChild(stopBtn);

let h2 = (document = document.createElement("h2"));
h2.innerHTML = "I will count from 0 to 7";
body.appendChild(h2);

let count = 0;

startBtn.addEventListener("click", () => {
  let start = setInterval(() => {
    count++;
    if (h2.innerHTML == 7) {
      count = 0;
    }
    h2.innerHTML = count;
    bg.backgroundColor = colors[count];
    startBtn.style.backgroundColor = colors[count - 1];

    // for box1
    if (box1) {
      box1.style.transform = rotate[count];
    }
    // for box2
    if (box2) {
      box2.style.transform = scale[count];
    }
    // for box3
    if (box3) {
      box3.style.transform = translate[count];
    }

    stopBtn.addEventListener("click", () => {
      clearInterval(start);
    });
  }, 1000);
});
