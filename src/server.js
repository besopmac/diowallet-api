import express, { json } from "express";
import authRouter from "./routes/authRoutes.js";
import transactionRouter from "./routes/transactionRoutes.js";
import { connectDb } from "./config/database.js";

const app = express();
const port = process.env.PORT;

connectDb();
app.use(json());
app.use(authRouter);
app.use(transactionRouter);

app.listen(port, () => console.log(`Server listening on port ${port}`));