import Recipe from './../models/recipe'
// @ts-ignore
import * as fetch from 'node-fetch'
import { recipeApiKey } from './../config/keys'
import slugify from 'slugify';

export const searchRecipe = async (req: any, res: any) => {

  await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${recipeApiKey}&query=${req.query.searchQuery}`)
            .then((response: any) => response.json())
            .then((data: any) => {
    
    const totalResults = data.totalResults;
    const results = data.results;

    res.render('recipes/search', {
      recipes: results
    });
  })
  
}

export const showRecipeInformation = async (req: any, res: any) => {

  await fetch(`https://api.spoonacular.com/recipes/${req.params.id}/information?apiKey=${recipeApiKey}`)
            .then((response: any) => response.json())
            .then((data: any) => {

    console.log(data)

    res.render('recipes/information', {
      recipe: data
    })
  })
}

export const getRecipes = async (req: any, res: any) => {
  const recipes = await Recipe.find().sort({createdAt: 'desc'})

  res.render('recipes/index', {
    recipes: recipes
  })
};