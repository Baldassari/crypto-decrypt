// Import stylesheets
import "./style.css";
const crypto = require("crypto");
const { privateKey, passphrase } = require("./keys");
function decrypt(data) {
  return crypto
    .privateDecrypt(
      {
        key: privateKey,
        passphrase: passphrase,
        padding: crypto.constants.RSA_PKCS1_PADDING
      },
      Buffer.from(data, "base64")
    )
    .toString();
}

// Write Javascript code!
const valueToDecrypt =
  "eJJgyX0dLqE1uEZOGz27MHjp8bBv75CQNFV7xbLZfM0qhqKDboY19CQmHbFxYEZyfmi+X2VeABxF5moyUdqXJNogc4U0BQkhcPa2acWE584HSGvBzIhszPuJNPE8ZZM1xXhTUeUmDv/vBPzvBWiqOj3Lo+ozWXkR7Qb9e6/lJtDkPLWcKuD3SUA+hNKciS5uTXs1PNPrgZ3r2BlHIywESESZe1/9CYVdDiK/O5aaIghfo5oA3rlc0RFcK+k+ZDEVLwb+18bAwt+3/sD48vMdUOx9ujco9KwfMHe0aOtd2sgE9XACaBo4F50/31vLKQOlNtmGPpXGYD+FzKtO/uM/OksgsMhLtJ1maNYMI9tf/HDc3tcMyEU83HjiAKfajwHZVVxbnA7sLp3JtSV0Jgef3bAkFatTUebKXZgib2D6y8ip7bqmdOuRO7gLhdRtUSc3/Pm6WTIxmifzP4H7Pd5SHs+KeCY+PGdUvhI8cFdVIdCvfwuW3jhTKO2c+K2lcbVYdpd7IEG8WiCOSbCnKVN61Gqc187P0BWjhJwNrKnMqtsYpLlppQ/KaiuFPP7PUn0XEjKS1drXbLtQ9xbYO0kGH0x98HTATUevluc8eT+WCCgO8YzT44v+MuGZJ+RUbYgNkbBg29UAczUGnReMxce/qiI5iHAxsOIDr2h0nqtmD5c=";

const obj = JSON.parse(decrypt(valueToDecrypt));
const appDiv = document.getElementById("app");
appDiv.innerHTML = JSON.stringify(obj, null, 4);
