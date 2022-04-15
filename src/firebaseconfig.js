import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_WEATHER_KEY,
};

const app = initializeApp(firebaseConfig);

export default firebaseConfig;
