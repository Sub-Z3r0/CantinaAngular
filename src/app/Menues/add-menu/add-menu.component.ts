import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-add-menu',
  templateUrl: './add-menu.component.html',
  styleUrls: ['./add-menu.component.css']
})
export class AddMenuComponent implements OnInit {
  menuForm = new FormGroup({
      menuName: new FormControl(''),
    menuIngredients: new FormControl(''),
    menuAllergen: new FormControl(''),
    menuIcon: new FormControl('')
  });
  constructor() { }

  ngOnInit() {
  }

}
