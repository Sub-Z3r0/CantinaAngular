import {Allergen} from './Allergen';
import {RecipeLine} from './RecipeLine';
import {AllergensInMenu} from './AllergensInMenu';

export class MainFood
{
  id: number;
  mainFoodName : string;
  recipeLines?: RecipeLine[];
  allergensInMenu? : AllergensInMenu[];
  foodIconId? : number;
  FoodDate? : Date;
}
