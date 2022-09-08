import { Component, OnInit } from '@angular/core';
import { Period } from 'src/app/interfaces/forecast';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-weather-forecast',
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.css']
})
export class WeatherForecastComponent implements OnInit {

  title = 'Weather Forecast';
  periods: Period[] = [];

  constructor(private apiService:ApiService){ }

  ngOnInit(){
    this.getApiResponse();
  }
  getApiResponse() {
    this.apiService.getForecast().subscribe((data) => {console.log(data),
       console.log(data.properties.periods),
       this.periods = data.properties.periods});
  }
}
