import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MOTD} from '../models/MOTD';
import {MainFood} from '../models/MainFood';
import {environment} from '../../../environments/environment.prod';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainFoodService {
  apiUrl = 'https://cantinaappdatabase.azurewebsites.net/api/mainFood';
  constructor(private http: HttpClient) {

  }
  getMainFood(): Observable<MainFood[]>
  {
    return this.http.get<MainFood[]>
    (this.apiUrl);
  }

  addMainFood(mainFood : MainFood): Observable<MainFood>
  {
    return this.http.post<MainFood>(this.apiUrl, mainFood);
  }/*
  upgradeMainFood(mainFood:MainFood){
    const foodToUpdate = this.mainFood.find(mf => mf.id === mainFood.id);
    const index = this.mainFood.indexOf(foodToUpdate);
    this.mainFood[index] = mainFood;
  }
  deleteMainFood(id: number) {
    this.mainFood = this.mainFood.filter(mf => mf.id !== id);
  }*/
}
