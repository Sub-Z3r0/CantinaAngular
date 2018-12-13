import {Pipe, PipeTransform} from "@angular/core";
import {Ingredients} from "../shared/models/Ingredients";


@Pipe({
  name: 'ingredientFilter',
  pure: false
})
export class SearchBoxPipe implements PipeTransform{

  transform(ingredients: Ingredients[], searchIngredient: string): Ingredients[] {
    if (!ingredients || !searchIngredient){
      return ingredients;
    }
    return ingredients.filter(ingr => ingr.ingredientName.toLowerCase()
      .indexOf(searchIngredient.toLowerCase()) !== -1);
  }
}
