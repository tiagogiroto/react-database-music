import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyD3V1kC2mLbqH8TvPAOPCl1kjF0_v00bIA",
    authDomain: "discord-songs-ccd65.firebaseapp.com",
    projectId: "discord-songs-ccd65",
    storageBucket: "discord-songs-ccd65.appspot.com",
    messagingSenderId: "3642377397",
    appId: "1:3642377397:web:95af52113cf8f7b446aafc",
    measurementId: "G-RGDELJ65ZH"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
