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
  "r+PnsNLoTcHk/0XTamQzGTnTzDMXK+/I9q1MpT0I9b8/mgAHb6A3Zspi2AWrsGm75TV7ejnVE8mVAKe4BWdzAjFF4ncU9Vgw4iSAbXA2/nb50ilAEzhE7m2thhdyl4sH7ho7mikTTQBDFqA2IETQwFGmjrn9uoimBVYXux43wIdHhPIRhWd2dm+pzGSiDJER+feuhIQ2QHNUzNxOJTMY5jEgSaq8+tE3PBxYZSSNezHcLNVvg9eGJnjsmyJEYtOl7CYJOr6zlAdTYzw0UGbMa/NRnbLWThzMTVzrk6hlTtzKkNfKAsi0eIJSHyQP0MEUcQ3NwDfHDAkz4/Abz55BuWcPHarVHm4StARFuhQC9sfMYgx1tseJp59mD5t5Fze2ym4q2PrTm+TGS3hbtEdsXeRM01UQazK6t0vvuojjuaR3q1zpZMlMI6o8yqL5nDdTULjrTpyxDvGn/1U5iGiRl6KHTnwMfpEUWrcBx+L55PFzskK1MdRTQxqxgtSQTIz7W+5uEDq70faf1w/U2DuaG+HthT02HQ3hgpuxPqRrvKaYUHE8JVvERgnrFbpRy2TkO1/EU4nrkhgW8T+uK6YGfaKIl4OT7pvlKUz6iQwMFAMqdDWfvU8WE6S5+vo8YwmKl1eA4GO8s5AkdkTjIbQ+9AgVkdf+8GnUbaDg1rQWbz0=";

const obj = JSON.parse(decrypt(valueToDecrypt));
const appDiv = document.getElementById("app");
appDiv.innerHTML = JSON.stringify(obj, null, 4);
