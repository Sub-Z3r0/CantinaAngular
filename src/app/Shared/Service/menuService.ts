import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {MainFood} from '../models/MainFood';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  apiUrl = environment.apiUrl + 'api/MainFood';
  constructor(private http: HttpClient) {  }

  getMenues(): Observable<MainFood[]> {

    return this.http.get<MainFood[]>(this.apiUrl);
  }

}
