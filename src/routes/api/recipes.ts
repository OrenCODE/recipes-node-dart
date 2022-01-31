import express from 'express'
import { getRecipes } from '../../controllers/recipes'
const router = express.Router();

router.get('/recipes', getRecipes);

export default router;