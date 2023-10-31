import express, { Application, Router } from "express";
import dotenv from "dotenv";
import cors from "cors";
import { allow as allowHeaders } from "./infrastructure/rest/middlewares/HeadersMiddleware";

dotenv.config();

const app: Application = express();
const port = process.env.API_PORT || 80;

// Configure app
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Set basic middlewares
app.use(allowHeaders);

// API
app.use("/api", require("./infrastructure/rest/routes/api"));

// Listen on specified port
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
