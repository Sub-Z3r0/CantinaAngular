import { Injectable } from '@angular/core';
import {Ingredients} from "../models/Ingredients";
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../../environments/environment.prod';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class IngredientService {
ingredients: Ingredients[];
apiUrl = environment.apiUrl + 'api/ingredients';
id= 0;
constructor(private http: HttpClient) {

}


getIngredients():Observable<Ingredients[]>{
  const params = new HttpParams()
  return this.http.get<Ingredients[]>(this.apiUrl, {params, params});
}
addIngredient(ingredients: Ingredients) {
  ingredients.id = this.id++;
  this.ingredients.push(ingredients);
}
upgradeIngredient(ingredient:Ingredients){
  const ingToUpdate = this.ingredients.find(ing => ing.id === ingredient.id);
  const index = this.ingredients.indexOf(ingToUpdate);
  this.ingredients[index] = ingredient;
}
deleteIngredient(id: number) {
  this.ingredients = this.ingredients.filter(ing => ing.id !== id);
}

}
