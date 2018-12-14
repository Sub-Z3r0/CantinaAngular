import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MOTD} from '../models/MOTD';
import {MainFood} from '../models/MainFood';
import {environment} from '../../../environments/environment.prod';
import {Observable} from 'rxjs';
import {isFatalDiagnosticError} from '@angular/compiler-cli/src/ngtsc/diagnostics';
import {SpecialOffers} from '../models/SpecialOffers';

@Injectable({
  providedIn: 'root'
})
export class MainFoodService {
  apiUrl = 'https://cantinaappdatabase.azurewebsites.net/api/mainFood';
  constructor(private http: HttpClient) {

  }

  dailyFoodList: MainFood[] = [];
  getMainFood(): Observable<MainFood[]>
  {
    return this.http.get<MainFood[]>
    (this.apiUrl);
  }

  chooseDailyFood( dailyFood: MainFood)
  {

    console.log(this.dailyFoodList);
    this.dailyFoodList.push(dailyFood);

  }
  readDailyFood() : MainFood[]
  {

    return JSON.parse(localStorage.getItem('dailyFood'));

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
  UpdateToDaily(mainFood: MainFood): Observable<MainFood> {
   return this.http.put<MainFood>(this.apiUrl + '/' + mainFood.id, mainFood);

  }

  getDailyMainfood(date: Date): Observable<SpecialOffers[]>  {
    return this.http.get<SpecialOffers[]>
    (this.apiUrl + '?date='+date.getFullYear()+'-'+(date.getMonth()+1)+'-' + date.getDate());
  }
}
