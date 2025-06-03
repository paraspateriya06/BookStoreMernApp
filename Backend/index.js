import "dotenv/config";

import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js";
import booksRoute from "./routes/booksRoute.js";
import cors from "cors";

//dotenv.config();

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();



//  middle  ware parsing req body

app.use(express.json());
// Middleware for handling CORS POLICY
// Ops 1 ::: Allow All Origins with Default of cors

app.use(cors(
  {
    origin: "https://mooneybookstore.vercel.app/" // Replace with your frontend UR
  }
));

//ops 2: allow custom origin

//  app.use(
//     cors({
//         origin : 'http://localhost:3000',
//         methods : ['GET', 'POST', 'PUT', 'DELETE'],
//         allowedHeaders: ['Content-Type'],

//     })
//  );

app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send("welcome to my bookstore application");
});

app.use("/books", booksRoute);

console.log(process.env.MONGODB_URL);

mongoose
  .connect(process.env.MONGODB_URL)
  
  .then(() => {
    console.log("App is connected to DB");
    app.listen(PORT, () => {
      console.log(`app is listening to port :${PORT}`);
    });
  })

  .catch((error) => {
    console.log(error);
  });

// create book model with mongoose
