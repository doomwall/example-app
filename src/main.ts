const btn = document.getElementById("btn") as HTMLButtonElement;
const message = document.getElementById("message") as HTMLParagraphElement;

let count = 0;

btn.addEventListener("click", () => {
  count++;
  message.textContent = `You clicked ${count} time${count === 1 ? "" : "s"}!`;
});
