import express from 'express';
import cors from 'cors';
import { dbConfig } from './config/config.js';
import productRoutes from './routes/products.routes.js';
import mongoose from 'mongoose';

const app = express();
const port = 3000;

mongoose.connect(dbConfig.url, {
  //useNewUrlParser: true,
  //useUnifiedTopology: true,
}).then(() => {
  console.log("Connected to database!");
}).catch((err) => {
  console.error("Error connecting to database:", err.message);
});

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: "Welcome to DressStore Application." });
});

app.use('/api', productRoutes);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
