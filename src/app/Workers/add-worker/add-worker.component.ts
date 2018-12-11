import { Component, OnInit } from '@angular/core';
import {WorkerService} from "../../shared/Service/worker.service";
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-worker',
  templateUrl: './add-worker.component.html',
  styleUrls: ['./add-worker.component.css']
})
export class AddWorkerComponent implements OnInit {
  workerForm= new FormGroup({
    Name: new FormControl(''),
    Account: new FormControl(''),
    Password: new FormControl('')
  });

  constructor(private workerService: WorkerService,
              private router: Router) { }

  ngOnInit() {
  }
  addWorker(){
    const worker = this.workerForm.value;
    this.workerService.addWorker(worker);
    this.workerForm.reset();
    this.router.navigateByUrl('/adminview');
  }

}
