import { Component, EventEmitter, Input, OnChanges, Output, ViewChild, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonModal, IonicModule, SearchbarCustomEvent } from '@ionic/angular';
import { CommonModule } from '@angular/common';

// Ensure you've installed the leaflet-geosearch package and its types if available
// You may need to adjust the import based on the actual library structure or available types
import * as GeoSearch from 'leaflet-geosearch';

@Component({
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
  selector: 'app-geo-nav',
  templateUrl: './geo-nav.component.html',
  styleUrls: ['./geo-nav.component.scss'],
})
export class GeoNavComponent implements OnInit, OnChanges {
  @Input() title = 'Search';
  @Input() trigger = 'trigger-element';
  @Output() selectedChanged: EventEmitter<any> = new EventEmitter();
  @ViewChild(IonModal) modal!: IonModal;

  provider = new GeoSearch.OpenStreetMapProvider({
    params: {
      countrycodes: 'us', // limit search results to the US
    },
  });

  results: any[] = [];
  selected: any;

  constructor() {}

  ngOnInit() {}

  ngOnChanges() {}

  // click handler
  itemSelected(item: object) {
    this.selected = item;
    this.selectedChanged.emit(this.selected);

    // close modal and clear results
    this.modal.dismiss();
    this.results = [];
  }

  // search feature - populates the list of matches
  async search(event: SearchbarCustomEvent) {
    const searchTerm = event?.detail?.value?.toLowerCase();
    if (searchTerm) {
      this.results = await this.provider.search({ query: searchTerm });
    }
  }
}
