import { Component, OnInit } from '@angular/core';
import {makeClassTargetFilter} from '@angular/compiler-cli/src/ngcc/src/host/fesm2015_host';
import {WorkerService} from '../shared/Service/worker.service';
import {Workers} from '../shared/models/Workers';
import {AuthenticationService} from "../shared/Service/authentication.service";
import {getToken} from "codelyzer/angular/styles/cssLexer";

@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.css']
})
export class AdminViewComponent implements OnInit {
  workers: Workers[];
  isLogged : boolean = false;
  constructor(private workerService: WorkerService,
              private authenticationService: AuthenticationService) {}

  ngOnInit() {
    if (this.authenticationService.getToken()) {
      this.isLogged = true;
    }
    this.workers = this.workerService.getWorkers();
  }

  deleteWorker(id: number) {
    this.workerService.deleteWorker(id);
    this.ngOnInit();
  }

  AddWorker() {

  }
}
