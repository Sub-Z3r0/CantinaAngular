import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../shared/Service/authentication.service";

@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.css']
})
export class AdminViewComponent implements OnInit {
  isLogged : boolean = false;
  constructor(
              private authenticationService: AuthenticationService) {}

  ngOnInit() {
    if (this.authenticationService.getToken()) {
      this.isLogged = true;
    }
  }

  deleteWorker(id: number) {
    this.ngOnInit();
  }

  AddWorker() {

  }
}
