import "./styles.css";
import { Chain, Transaction, Wallet, Block } from "./models";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

const itachi = new Wallet();
const madara = new Wallet();
const orochimaru = new Wallet();

itachi.send(50, madara.publicKey);
madara.send(23, orochimaru.publicKey);
orochimaru.send(5, madara.publicKey);

console.log(Chain.instance);
