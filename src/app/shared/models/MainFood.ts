import {FoodIcon} from './FoodIcon';
import {Allergen} from './Allergen';
import {RecipeLine} from './RecipeLine';

export class MainFood
{
  id: number;
  mainFoodName : string;
  recipeLines?: RecipeLine[];
  allergensTypeId? : Allergen[];
  foodIconId? : number;
  FoodDate? : Date;
}
