import "./style.css";
import javascriptLogo from "./javascript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.js";

import "./style.css";
import javascriptLogo from "./javascript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.js";

document.querySelector("#app").innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`;

setupCounter(document.querySelector("#counter"));
import { database, ref, push } from "./firebase.js";

document.getElementById("rsvpForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("guestName").value;

  // Simpan ke Firebase Realtime Database
  const rsvpRef = ref(database, "rsvp/");
  push(rsvpRef, {
    name: name,
    timestamp: Date.now(),
  })
    .then(() => {
      document.getElementById("message").textContent =
        "Terima kasih, RSVP berhasil dikirim!";
      document.getElementById("rsvpForm").reset();
    })
    .catch((error) => {
      console.error(error);
      document.getElementById("message").textContent =
        "Terjadi kesalahan. Coba lagi.";
    });
});

setupCounter(document.querySelector("#counter"));
