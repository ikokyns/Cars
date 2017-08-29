import { Component, OnInit } from '@angular/core';
import { CarsService } from '../../shared/services/cars.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Car } from '../../shared/model/car-model';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html'
})

export class CarsComponent implements OnInit {
	
	private cars: any = [];

	constructor() {
		
	}




  ngOnInit() {
  }

}
