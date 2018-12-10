import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MOTD} from '../models/MOTD';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class MotdService {


  apiUrl = 'api/motd';
  constructor(private http: HttpClient) { }

  getMOTDById(id: number): Observable<MOTD>
  {
    return this.http.get<MOTD>(environment.apiUrl+this.apiUrl + '/' + id);
  }
}
