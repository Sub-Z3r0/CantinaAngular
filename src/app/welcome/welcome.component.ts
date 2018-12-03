import { Component, OnInit } from '@angular/core';
import {root} from "rxjs/internal-compatibility";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
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
