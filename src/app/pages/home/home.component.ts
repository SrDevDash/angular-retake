import { AfterViewInit, Component } from '@angular/core';
import * as L from 'leaflet';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements AfterViewInit {
  private map: any;
  data: any;
  iconURL: string = '';

  constructor(private homeService: HomeService) {}

  ngAfterViewInit(): void {
    this.initMap();
  }

  private initMap(): void {
    this.map = L.map('map', {
      center: [39.8282, -98.5795],
      zoom: 3,
    });

    const tiles = L.tileLayer(
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      {
        maxZoom: 18,
        minZoom: 3,
      }
    );

    const marker = L.marker([51.5, -0.09]).addTo(this.map);
    tiles.addTo(this.map);
    this.map.on('click', (e: any) => this.onMapClick(e));

    marker.bindPopup('<b>Hello world!</b><br>I am a popup.').openPopup();
  }

  onMapClick(e: any) {
    const popup = new L.Popup();
    popup
      .setLatLng(e.latlng)
      .setContent(`You clicked at ${e.latlng.toString()}`)
      .openOn(this.map);

    this.homeService.getWheather(e.latlng).subscribe((rep) => {
      this.data = rep;
      console.log(rep);
      this.iconURL = `http://openweathermap.org/img/wn/${rep.weather[0].icon}@2x.png`;
    });
  }
}
