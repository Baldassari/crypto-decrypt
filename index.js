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
  "HEVjbef2SbdkxociZJg5EMc5rQh6u7/Yh8fx6fkDR1KygSv79m2IBBdyuKTX4b3alCwgoOJgW5rwHGbyEDEKAs1Ntrh5fNE2+71X31QS3LeXfKwpZnBm2rPQEZYcKSp9YBqJMJ1m5i1uKI8An4bMiEMgUvojVbxImPSys1T5iddQEb6i5uS+fv8SVXZPpo5aIYQH5cT6Xnj9B3ztATRoegSCHiF5sGSArae4N2AMWxUmu+ajX/luOIRWf7h2ADhsnZPd3HVymKFOByCo+RDp9NgbA/nMCQyWDEJwYHN8ucCrPB243MMHX8m8zQA2UxwISWw6j8QNs153r9UtyxmNJ3fdyN4rNmkEF4HVUKcmAzJQvUg1TFD/2q37b/bix6MgWtPRJK/Cltt0BOTcdnAwrguZ01sNMbXuzi2R1hBntDfQ8/4b/sMbVHGImqiaRZM3975voOrS5P7HmIhTh9AgmTxvjNN0iFq106vCFtEVMAwC1xgDQvNz8xK3h1q4+i0suIaaCCq18LZA4YDvU2VZ3yxMDlqcHZcy1N5pn4MYplRlEEs4sHeUMtvdvZkYefnijIhEBTH/jzfOJ2qt1v+pDGgs5Z7GogUfkWH/Es9gQpRjI1X/5UPfU9jONNLiiqZZAU9T/Eify4oPzqr4pLD/UJvpP+AiXVKM/eCav5dsLIY=";

const obj = JSON.parse(decrypt(valueToDecrypt));
const appDiv = document.getElementById("app");
appDiv.innerHTML = JSON.stringify(obj, null, 4);
