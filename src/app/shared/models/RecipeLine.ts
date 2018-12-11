import {Ingredients} from './Ingredients';
import {Allergen} from './Allergen';
import {FoodIcon} from './FoodIcon';
import {MainFood} from './MainFood';

export class RecipeLine
{
  mainFoodId?: number;
  mainFoodType?: MainFood;
  ingredientsId?: number;
  ingredientsType?: Ingredients;
}
