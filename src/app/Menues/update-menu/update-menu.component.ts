import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {SpecielOffersService} from '../../shared/Service/speciel-offers.service';
import {MainFoodService} from '../../shared/Service/main-food.service';
import {forEach} from '@angular/router/src/utils/collection';
import {of} from 'rxjs';
import {MainFood} from '../../shared/models/MainFood';

@Component({
  selector: 'app-update-menu',
  templateUrl: './update-menu.component.html',
  styleUrls: ['./update-menu.component.css']
})
export class UpdateMenuComponent implements OnInit {

  constructor(private route: ActivatedRoute, private mainFoodService: MainFoodService, private router: Router) { }

  id: number;
  today: Date;

  mainFoodForm = new FormGroup({
    mainFoodName: new FormControl(''),
    recipeLines: new FormControl( ''),
    allergens: new FormControl( '')
  });

  private void
  ngOnInit() {
    this.id = + this.route.snapshot.paramMap.get('id');

    this.mainFoodService.getFoodById(this.id)
      .subscribe(mFood => {
        this.mainFoodForm.patchValue({
          mainFoodName: mFood.mainFoodName,
          recipeLines: mFood.recipeLines,
          date: mFood.foodDate,
          allergens: mFood.allergensInMenus
        });
      });
  }

  save()
  {
    this.today = new Date;

    const mainFood = this.mainFoodForm.value;
    mainFood.id = this.id;
    mainFood.date = this.today;
    this.mainFoodService.UpdateToDaily(mainFood)
      .subscribe(() => {
        this.router.navigateByUrl('');
      });
  }
}
