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
  ingredientsName: string[] = [];
  search = '';

  constructor(private ingredientService: IngredientService) { }

  ngOnInit() {
    this.ingredientService.getIngredients().subscribe(ingList => {
      this.ingredients = ingList;
      for (let name of this.ingredients) {
        this.ingredientsName.push(name.ingredientName);
      }});
  }

  handleResult(result) {
    this.search = result;
  }
}
