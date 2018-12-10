import {FoodIcon} from './FoodIcon';
import {Allergen} from './Allergen';
import {RecipeLine} from './RecipeLine';

export class Ingredients
{
  id?: number;
  ingredientName?: string;
  foodIconId? : number;
  allergenType? : Allergen;
  recipeLines? : RecipeLine[];
}
