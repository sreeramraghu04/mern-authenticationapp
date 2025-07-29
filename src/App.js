import express from "express";
import morgan from "morgan";
import cors from "cors";
import cookieParser from "cookie-parser";
import AuthRoutes from "./routes/AuthRoutes.js";
/* import crypto from "crypto"; */

const app = express();

//! middlewares
app.use(cors()); //*allows to interact with client which is loaded in different domain
app.use(express.json()); //*instructing the app to accept data in the json format
app.use(morgan.apply("dev")); //*logs requests, errors and more to the console
app.use(cookieParser()); //* it allows the server access user cookies

//! routes
app.use("/api/v1/auth", AuthRoutes);

//! generate secret key
/* const Key = crypto.randomBytes(64).toString("hex");
console.log(Key);
 */
app.get("/", (req, res) => {
  res.send("<h1>hello authentication-app</h1>");
});

export default app;
