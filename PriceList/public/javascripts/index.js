// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";
import { getFirestore, collection, getDocs } from 'https://www.gstatic.com/firebasejs/9.8.1/firebase-firestore.js';
const harga = document.querySelector('#hargaList');
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9oenob1-wfgtvgbsKIhOUXhYDJh7Vxuo",
  authDomain: "price-list-js.firebaseapp.com",
  projectId: "price-list-js",
  storageBucket: "price-list-js.appspot.com",
  messagingSenderId: "786215046463",
  appId: "1:786215046463:web:415839e40b4a799645578a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const itemsCol = collection(db, "items");

const querySnapshot = await getDocs(itemsCol);
let no = 1;
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  
  renderList(doc, no);
  console.log(doc.data());
  // console.log(no);
  // no++;
});

function renderList(data, no) {
  let tr = document.createElement('tr');
  let num = document.createElement('td');
  let name = document.createElement('td');
  let price = document.createElement('td');

  num.textContent = no;
  name.textContent = data.data().nama;
  price.textContent = data.data().harga;

  tr.appendChild(num);
  tr.appendChild(name);
  tr.appendChild(price);

  harga.appendChild(tr);
}

// getCities();

// getData();