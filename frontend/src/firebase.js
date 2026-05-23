import { initializeApp } from "firebase/app"

import {
  getAuth,
  GoogleAuthProvider
} from "firebase/auth"

const firebaseConfig = {

  apiKey: "AIzaSyB05G3MBTMiag2ErsB6vnayQUgUiDnB5mA",

  authDomain: "ecommerce-1aa93.firebaseapp.com",

  projectId: "ecommerce-1aa93",

  storageBucket: "ecommerce-1aa93.firebasestorage.app",

  messagingSenderId: "486075257608",

  appId: "1:486075257608:web:868d05346c6ae8cd70d2bd",

  measurementId: "G-PDHQ29Z30L"
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)

export const provider = new GoogleAuthProvider()