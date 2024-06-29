import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import bookRoute from './route/book.route.js';
import cors from "cors";
import userRoute from './route/user.route.js';



dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
const URL = process.env.mongoDBURI;

app.use(cors());


mongoose.connect(URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log("Connected to MongoDB");
})
.catch((err) => {
  console.error("Error connecting to MongoDB:", err);
});

// Middleware to parse JSON
app.use(express.json());

// Routes
app.use("/book", bookRoute);
app.use("/user", userRoute);


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
