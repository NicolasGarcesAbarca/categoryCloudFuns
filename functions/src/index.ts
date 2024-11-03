import {onRequest} from "firebase-functions/v2/https";
import express from "express";
import cors from "cors";
import {routes} from "./routes";
import {initializeApp} from "firebase-admin/app";
import {getFirestore} from "firebase-admin/firestore";

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);
initializeApp();

export const db = getFirestore();
export const bito = onRequest(app);
