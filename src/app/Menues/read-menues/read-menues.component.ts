import { Component, OnInit } from '@angular/core';
import {MainFood} from '../../Shared/models/MainFood';
import {MenuService} from '../../Shared/Service/menuService';

@Component({
  selector: 'app-read-menues',
  templateUrl: './read-menues.component.html',
  styleUrls: ['./read-menues.component.css']
})
export class ReadMenuesComponent implements OnInit {
mainFood: MainFood[];

  constructor(private MainService: MenuService) { }

  ngOnInit() {
    this.MainService.getMenues()
      .subscribe(listOfCustomers => {
        this.mainFood = listOfCustomers;
      });
  }



}
