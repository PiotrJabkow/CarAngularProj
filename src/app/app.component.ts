import { Component, OnInit } from '@angular/core';

class Car {
  constructor(
    public id: number,
    public brand: string,
    public year: number,
    public model: string,
    public mileage: number,
    public engineCapacity: number,
    public enginePower: number,
    public price: number,
    public image: string
  ) {}
}

@Component({
  selector: 'app-car-list',
  templateUrl: 'car-list.component.html',
  styleUrls: ['car-list.component.css']
})
export class CarListComponent implements OnInit {
  title = 'car';
  cars: Car[] = [];

  ngOnInit() {
    this.cars = [
      new Car(
        1,
        "Toyota",
        2019,
        "Supra",
        32000,
        3.2,
        280,
        219000,
        "https://images.pexels.com/photos/3874330/pexels-photo-3874330.jpeg"
      ),
      new Car(
        2,
        "Toyota",
        2016,
        "Yaris",
        88000,
        0.9,
        80,
        44500,
        "https://images.pexels.com/photos/5733711/pexels-photo-5733711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      ),
      new Car(
        3,
        "BMW",
        2020,
        "M4",
        19500,
        1.9,
        160,
        107500,
        "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      ),
      new Car(
        4,
        "BMW",
        2018,
        "X5",
        31500,
        2.4,
        170,
        135900,
        "https://images.pexels.com/photos/10467815/pexels-photo-10467815.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      ),
      new Car(
        5,
        "Honda",
        2015,
        "Civic",
        52100,
        1.9,
        140,
        67900,
        "https://images.pexels.com/photos/14821869/pexels-photo-14821869.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      )
    ];
  }
}
