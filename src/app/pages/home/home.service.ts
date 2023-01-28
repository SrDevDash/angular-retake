import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private http: HttpClient) {}

  getWheather(data: { lat: number; lng: number }): Observable<any> {
    console.log(
      `${environment.WEATHER_HOST}/weather?lat=${data.lat}&lon=${data.lng}&appid=${environment.API_WEATHER}`
    );
    return this.http.get(
      `${environment.WEATHER_HOST}/weather?lat=${data.lat}&lon=${data.lng}&appid=${environment.API_WEATHER}`
    );
  }
}
