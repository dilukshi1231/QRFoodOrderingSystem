import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import menuRoutes from './api/routes/menuRoutes.js';
import cartRoutes from './api/routes/cartRoutes.js';
import userRouter from './api/routes/userRoutes.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 6001;
// middleware
app.use(cors());
app.use(express.json());

// mongodb configuration using mongoose
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("MongoDB Connected Successfully!"))
  .catch((error) => console.log("Error connecting to MongoDB", error));

app.use('/menu', menuRoutes)
app.use('/carts', cartRoutes);
app.use('api/routes/users', userRouter);


app.get("/", (req, res) => {
  res.send("Hello Foodi Client Server!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
