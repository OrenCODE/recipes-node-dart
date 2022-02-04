import Recipe from './../models/recipe'
import axios from 'axios'
import { recipeApiKey } from './../config/keys'
import slugify from 'slugify';

export const searchRecipe = async (req: any, res: any) => {

  await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${recipeApiKey}&query=${req.query.searchQuery}`)
            .then((response: any) => {

    const totalResults = response.data.totalResults;
    const results = response.data.results;

    res.render('recipes/search', {
      recipes: results
    });
  })
  
}

export const showRecipeInformation = async (req: any, res: any) => {

  await axios.get(`https://api.spoonacular.com/recipes/${req.params.id}/information?apiKey=${recipeApiKey}`)
            .then((response: any) => {

    res.render('recipes/information', {
      recipe: response.data
    })
  })
}

export const getRecipes = async (req: any, res: any) => {
  const recipes = await Recipe.find().sort({createdAt: 'desc'})

  res.render('recipes/index', {
    recipes: recipes
  })
};