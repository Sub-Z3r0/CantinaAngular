import { Component, OnInit } from '@angular/core';
import {ReadMenuesComponent} from '../Menues/read-menues/read-menues.component';
import {request} from 'http';
import {MainFood} from '../Shared/models/MainFood';
import {MenuService} from '../Shared/Service/menuService';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  mainFood: MainFood[];
  constructor(private MainService: MenuService) { }

  ngOnInit() {
   /* this.MainService.getMenues()
      .subscribe(listOfCustomers => {
        this.mainFood = listOfCustomers;
      });*/
  }

}
