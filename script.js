let color = document.getElementById("color");
let getColor = document.getElementById("getbtn");

const randomColor = () => {
  let hex = "0123456789ABCDEF";
  let hash = "#";

  for (let i = 0; i < 6; i++) {
    hash = hash + hex[Math.floor(Math.random() * 16)];
  }

  color.innerHTML = hash;

  return hash;
};

function changeColor() {
  color.style.backgroundColor = randomColor();
}

getColor.addEventListener("click", changeColor);
