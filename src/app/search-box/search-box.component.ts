import { Component, OnInit } from '@angular/core';
import {IngredientService} from "../shared/Service/ingredient.service";
import {Ingredients} from "../shared/models/Ingredients";

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {
ingredients: Ingredients[];
filterIngredients: Ingredients[];
_searchIngredient : string;

  ngOnInit() {
    this.ingredientService.getIngredients().subscribe(ingList => {
      this.ingredients = ingList, this.filterIngredients = ingList});

  }
  get searchIngredient(): string {
    return this._searchIngredient;
  }

  set searchIngredient(value: string) {
    this._searchIngredient = value;
    this.filterIngredients = this.filteredIngredients(value);

  }

  filteredIngredients(searchString : string){
    return this.ingredients.filter(ingr => ingr.ingredientName.toLowerCase()
      .indexOf(searchString.toLowerCase()) !== -1);
  }
  constructor(private ingredientService: IngredientService) { }




}
