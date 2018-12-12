import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {MainFoodService} from '../../Shared/Service/main-food.service';
import {AuthenticationService} from '../../Shared/Service/authentication.service';

@Component({
  selector: 'app-add-menu',
  templateUrl: './add-menu.component.html',
  styleUrls: ['./add-menu.component.css']
})
export class AddMenuComponent implements OnInit {
  menuForm = new FormGroup({
    mainFoodName: new FormControl(''),
    recipeLines: new FormControl(''),
    allergensTypeId: new FormControl(''),
    foodIconId: new FormControl('')
  });
  constructor(private menuService: MainFoodService) { }

  ngOnInit()
  {

  }

  save()
  {
    const menu = this.menuForm.value;
    console.log(menu);
    this.menuService.addMainFood(menu)
      .subscribe(() => {
      });
  }
}
