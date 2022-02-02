import mongoose from 'mongoose'
import slugify from 'slugify'

/*
Spoonacular food API - get recipe information
https://spoonacular.com/food-api/docs#Get-Recipe-Information
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
  readyMinutes: {
      Type: Number,
      required: true
  },
  spoonacularScore: {
      type: Number,
      required: false,
  },
  dishTypes: {
      type: Array,
  },
  ingredients: {
      type: Array,
      required: true
  },
  summary: {
      type: String,
      required: true
  },
  cuisines: {
      type: Array,
      required: false
  },
  instructions: {
      type: String,
      required: true
  },
  srcUrl: {
      type: String,
      unique: true,
      required: true
  }

})

recipeSchema.pre('validate', function(next: any) {
  if (this.title) {
    this.slug = slugify(this.title, { lower: true, strict: true })
  }

  next()
})

export default mongoose.model('recipeInformation', recipeSchema)