import mongoose from 'mongoose'
import slugify from 'slugify'

/*
Spoonacular food API - get ingredient information
https://spoonacular.com/food-api/docs#Get-Ingredient-Information
*/

const ingredientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    amount: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: false
    }

})

ingredientSchema.pre('validate', function(next: any) {
  if (this.name) {
    this.slug = slugify(this.name, { lower: true, strict: true })
  }

  next()
})

export default mongoose.model('Ingredient', ingredientSchema)