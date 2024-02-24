import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
//import { HomePage } from './home.page';//

import { HomePageRoutingModule } from './home-routing.module';
import { GeoSearchBarComponent } from '../components/geo-search-bar/geo-search-bar.component';
import { GeoNavComponent } from '../components/geo-nav/geo-nav.component';


@Component({
  selector:'app-home',
  templateUrl:'home.page.html',
  styleUrls:['home.page.scss'],
})
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    GeoSearchBarComponent,
    GeoNavComponent,
  ],

})
export class HomePageModule {
  constructor(){

  }
}
