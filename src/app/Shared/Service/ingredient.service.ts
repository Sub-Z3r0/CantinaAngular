import { Injectable } from '@angular/core';
import {Ingredients} from "../models/Ingredients";
@Injectable({
  providedIn: 'root'
})
export class IngredientService {
ingredients: Ingredient[];
id = 0;
  constructor() {

  }
  getIngredients():Ingredients[] {
    return this.ingredients;
  }
  addIngredient(ingredient: Ingredients) {
    ingredient.id = this.id++;
    this.ingredients.push(ingredient);
  }
  deleteWorker(id: number) {
    this.ingredients = this.ingredients.filter(ing => ing.id !== id);
  }
}
