import { Component, OnInit } from '@angular/core';
import {MainFoodService} from '../shared/Service/main-food.service';
import {MainFood} from '../shared/models/MainFood';
import {MOTD} from '../shared/models/MOTD';
import {MotdService} from '../shared/Service/motd.service';

@Component({
  selector: 'app-choose-main-page-items',
  templateUrl: './choose-main-page-items.component.html',
  styleUrls: ['./choose-main-page-items.component.css']
})
export class ChooseMainPageItemsComponent implements OnInit {
  mainfoods: MainFood[];
  motd: MOTD;
  constructor(private motdService: MotdService, private  mainFoodService: MainFoodService )
  {

  }

  ngOnInit()
  {
    this.refresh();
  }

  refresh()
  {
    this.motdService.getMOTDById(2)
      .subscribe(listOfPets => {
        this.motd = listOfPets;
      });

    this.mainFoodService.getMainFood().subscribe(listOfMenues =>
    {
      this.mainfoods = listOfMenues;
    });
  }

}
