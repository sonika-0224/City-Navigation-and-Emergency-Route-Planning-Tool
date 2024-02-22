import { Component } from '@angular/core';
import * as L from 'leaflet';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  map!: L.Map;
  osm!:L.TileLayer;
  osmHot!:L.TileLayer;

  constructor() {}
 // ngOnInit(){
   // this.map=L.map('map',{
    //  center:[25.3791924,55.47655436],
     // zoom:15,
     // renderer:L.canvas()
    //})
    ionViewDidEnter(){
      this.map = L.map('mapId').setView([39.73, -104.99], 10);
      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(this.map);

      const basemaps={
        OpenStreeMap:L.tileLayer('https://tile.opensteetmap.org/{z}/{x}/{y}.png',{
          maxZoom:19,
        attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(this.map),
      OpenStreeMapHot:L.tileLayer('https://tile.opensteetmap.fr/hot/{z}/{x}/{y}.png',{
        maxZoom:19,
        attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(this.map),
        
      }
      L.control.layers(basemaps).addTo(this.map);

      basemaps.OpenStreeMap.addTo(this.map);
    }
    

  }

  





