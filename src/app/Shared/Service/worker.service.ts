import { Injectable } from '@angular/core';
import {Workers} from "../models/Workers";
@Injectable({
  providedIn: 'root'
})
export class WorkerService {
workers: Workers[];
id = 0;
  constructor() {
    this.workers = [
      {id: this.id++, Name: 'NoName', Account:'Worker501', Password:'EXECUTEORDER66'},
      {id: this.id++, Name: 'NoName', Account:'Worker501', Password:'EXECUTEORDER66'},
      {id: this.id++, Name: 'NoName', Account:'Worker501', Password:'EXECUTEORDER66'},
      {id: this.id++, Name: 'NoName', Account:'Worker501', Password:'EXECUTEORDER66'},
      {id: this.id++, Name: 'NoName', Account:'Worker501', Password:'EXECUTEORDER66'},
      {id: this.id++, Name: 'NoName', Account:'Worker501', Password:'EXECUTEORDER66'},
      {id: this.id++, Name: 'NoName', Account:'Worker501', Password:'EXECUTEORDER66'},
      {id: this.id++, Name: 'NoName', Account:'Worker501', Password:'EXECUTEORDER66'},
      {id: this.id++, Name: 'NoName', Account:'Worker501', Password:'EXECUTEORDER66'},
      {id: this.id++, Name: 'NoName', Account:'Worker501', Password:'EXECUTEORDER66'},
      {id: this.id++, Name: 'NoName', Account:'Worker501', Password:'EXECUTEORDER66'},
      {id: this.id++, Name: 'NoName', Account:'Worker501', Password:'EXECUTEORDER66'},
      {id: this.id++, Name: 'NoName', Account:'Worker501', Password:'EXECUTEORDER66'},
      {id: this.id++, Name: 'NoName', Account:'Worker501', Password:'EXECUTEORDER66'},
      {id: this.id++, Name: 'NoName', Account:'Worker501', Password:'EXECUTEORDER66'},
      {id: this.id++, Name: 'NoName', Account:'Worker501', Password:'EXECUTEORDER66'},
      {id: this.id++, Name: 'YesName', Account:'Worker502', Password:'12345asdfSafe'}
    ]
  }
  getWorkers():Workers[] {
    return this.workers;
  }
  addWorker(worker: Workers) {
    worker.id = this.id++;
    this.workers.push(worker);
  }
  deleteWorker(id: number) {
    this.workers = this.workers.filter(work => work.id !== id);
  }
}
