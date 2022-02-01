import mongoose from 'mongoose'
import slugify from 'slugify'

/*
Spoonacular food API - get recipe information
https://spoonacular.com/food-api/docs#Get-Recipe-Information
*/

const recipeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  slug: {
    type: String,
    required: true,
    unique: true
  },
  image: {
      type: String,
      required: false,
  },
  readyTime: {
      type: Number,
      required: true
  },
  srcURL: {
      type: String,
      required: true,
      unique: true
  },

})

recipeSchema.pre('validate', function(next: any) {
  if (this.title) {
    this.slug = slugify(this.title, { lower: true, strict: true })
  }

  next()
})

export default mongoose.model('Recipe', recipeSchema)