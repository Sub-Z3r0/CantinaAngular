import {FoodIcon} from './FoodIcon';
import {Allergen} from './Allergen';
import {Ingredients} from "./Ingredients";

export class MainFood
{
  id: number;
  Name: string;
  Ingredients: Ingredients;
  Allergen: Allergen;
  Icon: FoodIcon;
}
