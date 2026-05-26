const idag = new Date();

const alternativ = {
  year: "numeric",
  month: "long",
  day: "numeric"
};

const dagensDatum = idag.toLocaleDateString("sv-SE", alternativ);
const tidAlternativ = {
  hour: "2-digit",
  minute: "2-digit"
};
let text = idag.toLocaleTimeString("sv-SE", tidAlternativ);

const datumElement = document.getElementById('datum');
if (datumElement) {
  datumElement.textContent = `Dagens datum och tid: ${dagensDatum} ${text}`;
}

