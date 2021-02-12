// Import stylesheets
import "./style.css";
const crypto = require("crypto");
const { privateKey, passphrase } = require("./keys");
function decrypt(data) {
  return crypto
    .privateDecrypt(
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
  "lgltVqeWLuCMpnPGSVFzYOWI1N6ifER6kHOQkXjGwANoyuGS5U9xjBVZk6pxfaEAakcsO8RLwG3SdrOhmPYCJA363K6C0Ps2qatH6iHWQW11Sjx4o0/+HIpqFA8BKZbBmQl9IQzvqrntl5YkBEAdPPRvP2QSUatvyaJpD0OBvGjnpmyVCSaFHpF0y16Bzck3+6w9vXZX1j476q3leazwoOw6kPeISdO4xaQtDaVYwU6+ytmv+cGe7SJ6Z31MP2d3ZaDrYBq/7EO6E/VVLGIncjKRngWh5RhOvqd6Gkma7+3LrnCDnmXD+iTgpEX39gHdZPbnEEzuydM1BiIqCKBcMB71X0sTA6/mxTTPRhCuJshl8AX4v9qGk1I7RXTdIFfHtUYcp9gKXtsk/+Uey63slWppIsKRu3nOI0Yllt6M9qy3KnKRtLsao1yhfKMjjhnmWE/h2HriF04ta5q+EHlGMAv1mtHNi9K2cp8RXEa9IUAcClWd06Zthz8IGJAP1K+a1Q8xUn7SIg8xilEv90d9jxlnUY1Ql9rkbxTzkgjQdf1txZaq6lapFQp+WkI/ReGLLcmxWsJUyG4GVDimJYQfi5WerjPg/gqbtxIaxRE3j7GJIZz2W/iO2usYo7nSsriS7ERJ080UYs/J/Idgya4WXRZPCS6gYnzLZ4/rRypduks=";

const obj = JSON.parse(decrypt(valueToDecrypt));
const appDiv = document.getElementById("app");
appDiv.innerHTML = JSON.stringify(obj, null, 4);
