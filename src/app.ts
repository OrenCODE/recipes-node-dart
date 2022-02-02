import express from 'express';
import cors from 'cors';
import connectDB from './config/db';

// Declare Routes
import recipesRouter from './routes/api/recipes';

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json());
app.use(cors());
app.disable('etag');

app.set('view engine', 'ejs')
app.set('views', './src/views')

// Define Routes
app.use('/api/recipes', recipesRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));