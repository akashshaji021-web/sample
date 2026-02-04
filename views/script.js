const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const container = document.getElementById("container");
const result = document.getElementById("result");

noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * (container.offsetWidth - noBtn.offsetWidth);
  const y = Math.random() * (container.offsetHeight - noBtn.offsetHeight);

  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
});

yesBtn.addEventListener("click", () => {
  result.style.display = "block";
});
