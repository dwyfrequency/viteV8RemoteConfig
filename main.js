import firebase from "firebase/app";
import firebaseConfig from "./hidden/firebaseConfig";
import "firebase/remote-config";

firebase.initializeApp(firebaseConfig);
const remoteConfig = firebase.remoteConfig();
console.log(remoteConfig.settings);

async function component() {
  const element = document.createElement("div");
  element.innerHTML = "hello";

  return element;
}

document.body.appendChild(component());

// WITH NO CONFIG, dist/assets/index.6c3ed23a.js 84.23 KiB
// Run `yarn run build`
// Run `ls -lh dist/main.js` to get the above
