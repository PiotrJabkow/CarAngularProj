import { Component } from '@angular/core';
import { Car } from '../models/car.model';
import { CarService } from '../services/car.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css'],
})
export class CarListComponent {
  cars: Car[];

  constructor(private carService: CarService) {}

  ngOnInit(): void {
    this.getCars();
  }

  getCars(): void {
    this.carService.getCars().subscribe((cars) => (this.cars = cars));
  }
}
