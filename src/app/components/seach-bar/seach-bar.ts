import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import { Auto } from '../../interfaces/auto';
@Component({
  imports: [FontAwesomeModule],
  selector: 'app-seach-bar',
  styleUrl: './seach-bar.css',
  templateUrl: './seach-bar.html',
})
export class SeachBar {
  faMagnifyingGlass=faMagnifyingGlass;
  @Input() autos:Auto[]=[]
  @Output() onSelectCar=new EventEmitter<Auto>()
  selectedAutos: Auto[]=[]

   selectAutos(selectedBrand: string) {
  this.selectedBrand = selectedBrand;
  this.applyFilters();
}

  selectedPrice: number = 0;
  selectedBrand: string = '';
  selectedSort: string = 'default';
  selectedAvailability: string = 'all';
  favorites: number[] = [];
  showFavoritesOnly: boolean = false;

applyFilters() {
  this.selectedAutos = this.autos.filter(auto =>
    auto.brand.toLowerCase().startsWith(this.selectedBrand.toLowerCase())
    &&
    (this.selectedPrice === 0 || auto.price <= this.selectedPrice)
    &&
    (this.selectedAvailability === 'all' || auto.availability > 0)
    &&
    (!this.showFavoritesOnly || this.favorites.includes(auto.id))
  );

  if (this.selectedSort === 'asc') {
    this.selectedAutos.sort((a, b) => a.price - b.price);
  }
  else if (this.selectedSort === 'desc') {
    this.selectedAutos.sort((a, b) => b.price - a.price);
  }
}
sortAutos(sort: string) {
  this.selectedSort = sort;
  this.applyFilters();
}

resetFilters() {
  this.selectedBrand = '';
  this.selectedPrice = 0;
  this.selectedSort = 'default';
  this.selectedAvailability = 'all';

  this.applyFilters();
}

filterByPrice(price: string) {
  this.selectedPrice = Number(price);
  this.applyFilters();
}

filterByAvailability(availability: string) {
  this.selectedAvailability = availability;
  this.applyFilters();
}

toggleFavorite(auto: Auto) {
  if (this.favorites.includes(auto.id)) {
    this.favorites = this.favorites.filter(id => id !== auto.id);
  }
  else {
    this.favorites.push(auto.id);
  }
}

toggleShowFavorites() {
  this.showFavoritesOnly = !this.showFavoritesOnly;
  this.applyFilters();
}

  ngOnInit(){
  this.selectedAutos = this.autos;
  }
  selectCar(auto:Auto){
    this.onSelectCar.emit(auto)
  }
}
