import { Component, OnInit } from '@angular/core';
import {root} from "rxjs/internal-compatibility";
import {MOTD} from '../Shared/models/MOTD';
import {MotdService} from '../Shared/Service/motd.service';
import {MainFood} from '../Shared/models/MainFood';
import {MainFoodService} from '../Shared/Service/main-food.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  motd: MOTD;
  mainfoods: MainFood[];
  constructor(private motdService: MotdService, private  mainFoodService: MainFoodService) { }

  ngOnInit() {
    this.refresh();
  }
  refresh()
  {
    this.motdService.getMOTDById(2)
      .subscribe(listOfPets => {
        this.motd = listOfPets;
      });
    this.mainFoodService.getMainFood().subscribe(listOfMenues => {
    this.mainfoods= listOfMenues;
    });

  }

  PopUp() {
    document.getElementById('PopUpWindow').style.display='block';
    window.scrollTo({
      top: 0,
      left: 1,
      behavior: 'smooth'
    });
  }
}
