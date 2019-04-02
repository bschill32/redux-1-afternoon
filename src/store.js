import { createStore } from "redux"

const initialState = {
  name: "",
  category: "",
  authorFirst: "",
  authorLast: "",
  ingredients: [],
  instructions: [],
  recipes: []
}

export const UPDATE_NAME = "UPDATE_NAME"
export const UPDATE_CATEGORY = "UPDATE_CATEGORY"
export const UPDATE_AUTHOR_FIRST = "UPDATE_AUTHOR_FIRST"
export const UPDATE_AUTHOR_LAST = "UPDATE_AUTHOR_LAST"
export const UPDATE_INGREDIENTS = "UPDATE_INGREDIENTS"
export const UPDATE_INSTRUCTIONS = "UPDATE_INSTRUCTIONS"
export const UPDATE_RECIPES = "UPDATE_RECIPES"

function reducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_NAME:
      return { ...state, name: action.payload }
    case UPDATE_CATEGORY:
      return { ...state, category: action.payload }
    case UPDATE_AUTHOR_FIRST:
      return { ...state, authorFirst: action.payload }
    case UPDATE_AUTHOR_LAST:
      return { ...state, authorLast: action.payload }
    case UPDATE_INGREDIENTS:
      const newIngredient = [...state.ingredients, action.payload]
      return { ...state, ingredients: newIngredient }
    case UPDATE_INSTRUCTIONS:
      const newInstruction = [...state.instructions, action.payload]
      return { ...state, instructions: newInstruction }
    case UPDATE_RECIPES:
      const recipe = {
        name: state.name,
        category: state.category,
        authorFirst: state.authorFirst,
        authorLast: state.authorLast,
        ingredients: state.ingredients,
        instructions: state.instructions,
        recipes: state.recipes
      }
      const newRecipe = [...state.recipes, recipe]
      return { ...state, recipes: newRecipe }
    default:
      return state
  }
}

export default createStore(reducer)
