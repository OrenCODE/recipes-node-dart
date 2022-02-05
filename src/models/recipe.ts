import mongoose from 'mongoose'
import slugify from 'slugify'

/*
Spoonacular food API - search recipe information
https://spoonacular.com/food-api/docs#Search-Recipes-Complex
*/

const recipeSchema = new mongoose.Schema({
  spoonacularId: {
    type: Number,
    required: true,
    unique: true
  },
  title: {
    type: String,
    required: true
  },
  slug: {
    type: String,
    required: true,
    unique: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  image: {
      type: String,
      required: false,
  },
  imageType: {
    type: String,
    required: true
  },
  carbs: {
    type: String,
  },
  fat: {
    type: String,
  },
  protein: {
    type: String
  }
})

recipeSchema.pre('validate', function(next: any) {
  if (this.title) {
    this.slug = slugify(this.title, { lower: true, strict: true })
  }

  next()
})

export default mongoose.model('Recipe', recipeSchema)