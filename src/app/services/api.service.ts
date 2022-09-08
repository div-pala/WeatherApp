import { Injectable } from '@angular/core';
import { Period, Properties, TopLevel } from '../interfaces/forecast';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient:HttpClient ) {}

  getForecast() : Observable<TopLevel>{
    return this.httpClient.get<TopLevel>(environment.apiEndpoint);
  }
}
