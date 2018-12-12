import { Component, OnInit } from '@angular/core';
import {makeClassTargetFilter} from '@angular/compiler-cli/src/ngcc/src/host/fesm2015_host';
import {WorkerService} from '../shared/Service/worker.service';
import {Workers} from '../shared/models/Workers';

@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.css']
})
export class AdminViewComponent implements OnInit {
  workers: Workers[];
  constructor(private workerService: WorkerService) {

  }

  ngOnInit() {
    this.workers = this.workerService.getWorkers();
  }

  deleteWorker(id: number) {
    this.workerService.deleteWorker(id);
    this.ngOnInit();
  }

  AddWorker() {

  }
}
