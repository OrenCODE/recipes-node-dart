import express from 'express'
import { getRecipes, searchRecipe, showRecipeInformation } from '../../controllers/recipes'
const router = express.Router();

// router.get('/', getRecipes);

router.get('/information/:id', showRecipeInformation)

router.get('/search', searchRecipe);

export default router;