import {Allergen} from '../models/Allergen';
import {Injectable} from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AllergenService {
  allergens: Allergen[];
  id= 0;
  constructor() {

  }


  getAllergens():Allergen[]{
    return this.allergens;
  }
  addIngredient(allergens: Allergen) {
    allergens.id = this.id++;
    this.allergens.push(allergens);
  }
  upgradeIngredient(allergens:Allergen){
    const ingToUpdate = this.allergens.find(ing => ing.id === allergens.id);
    const index = this.allergens.indexOf(ingToUpdate);
    this.allergens[index] = allergens;
  }
  deleteIngredient(id: number) {
    this.allergens = this.allergens.filter(ing => ing.id !== id);
  }

}
