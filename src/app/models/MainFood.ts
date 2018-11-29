import {FoodIcon} from './FoodIcon';
import {Allergen} from './Allergen';

export class MainFood
{
  id: number;
  Name: string;
  Ingredients: string;
  Allergen: Allergen[];
  Icon: FoodIcon;
}
