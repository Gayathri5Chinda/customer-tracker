import express from "express";
import { toNodeHandler } from "better-auth/node";
import { auth } from "./utils/auth";
 
const app = express();
const port = 8000;
 
app.all("/api/auth/*", toNodeHandler(auth));
 

app.use(express.json());
 
app.listen(port, () => {
    console.log(`Better Auth app listening on port ${port}`);
});