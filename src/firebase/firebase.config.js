import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDvnlRkTBS-32Mmncs-wA74_OSKXVM-gNE",
  authDomain: "ecommerce001-f15f8.firebaseapp.com",
  projectId: "ecommerce001-f15f8",
  storageBucket: "ecommerce001-f15f8.appspot.com",
  messagingSenderId: "967970099488",
  appId: "1:967970099488:web:ed946d0fb38b86ba2f8745"
};

const app = initializeApp(firebaseConfig);

export default app;