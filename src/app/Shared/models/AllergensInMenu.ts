import {MainFood} from './MainFood';
import {Allergen} from './Allergen';

export class AllergensInMenu
{
  MainFoodId?: number;
  MainFood?: MainFood;
  AllergenID? : number;
  AllergenType? : Allergen;
}
