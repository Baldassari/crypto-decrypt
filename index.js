// Import stylesheets
import "./style.css";
const crypto = require("crypto");
const { privateKey, passphrase } = require("./keys");
function decrypt(data) {
  return crypto
    .publicDecrypt(
      {
        key: privateKey,
        passphrase: passphrase
      },
      Buffer.from(data, "base64")
    )
    .toString();
}

// Write Javascript code!
const valueToDecrypt =
  "EUjIWAy1LIeQw+g9mZAVZ78LOpMHaGQce97O4NOfLfzZsoZvgZT7F5bGzVDk6d+/yS5KTeMbY6TvjGyEbTgRrD3DPENfNKwsGpuX7x/kB8/eSKrECb6LcqIpz/d7QWpSxH7jPJlBTmFlJpIlvYFPZ9nLRRTCrZ/BAd2vMLZIeyKDqOrn8m3wOua86RMpcvrck53OHggDnmsDpQDc+BSpRshusP1SX+puv6YN1poVQNrxFCiqzJIIV85QbV7tL56PEd4cssdBSefLDilt1QuDoQLrdp9B3S1hTbb73lpkRP5WYRnMxGH+ef/n9yf1apPxaT0QhxO36b702bkweFjZPCxxmXaAnZdvggaTqMOAPuAW7uRgPuu2mOBN72hQMD+M2Kzr20/KOfqWepSOW2x0c6CKsl+yNpmEm8sR7A5fp8aP6iXYuI/QfaBNu1XNbH86W92Sxl5EUuOuUny8we0e9MBauPAk9V1oh1PBxwfNnCiJGwuw/FKlpzKeMFcLsz0ahHdPVaQLZhvW6a9Wp6yNlupsvfvH0PnMuOIMqCDL3fLtMKRKHgSI/k//ufZhCsxMhi/bCdAlbpHOziriigo2ZEIcskTTAKobn0yC+FtHvv0vt5NMtbwkoSTH2QKpvyIWNGBu3jLriIuTJB5AbGScjm0YwGZZ5ZvASA/9jM8UG2Q=";

const obj = JSON.parse(decrypt(valueToDecrypt));
const appDiv = document.getElementById("app");
appDiv.innerHTML = JSON.stringify(obj, null, 4);
