import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MOTD} from '../models/MOTD';
import {MainFood} from '../models/MainFood';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class MainFoodService {
  apiUrl = 'api/mainFood';
  constructor(private http: HttpClient) {

  }
  getMainFood(): Observable<MainFood[]>
  {
    return this.http.get<MainFood[]>
    (environment.apiUrl+this.apiUrl);
  }
 /* addMainFood(mainFood: MainFood) {
    mainFood.id = this.id++;
    this.mainFood.push(mainFood);
  }
  upgradeMainFood(mainFood:MainFood){
    const foodToUpdate = this.mainFood.find(mf => mf.id === mainFood.id);
    const index = this.mainFood.indexOf(foodToUpdate);
    this.mainFood[index] = mainFood;
  }
  deleteMainFood(id: number) {
    this.mainFood = this.mainFood.filter(mf => mf.id !== id);
  }*/
}
