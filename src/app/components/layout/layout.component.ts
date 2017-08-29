import { Component, OnInit } from '@angular/core';
import { CarsService } from '../../shared/services/cars.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Car } from '../../shared/model/car-model';
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html'
})
export class LayoutComponent implements OnInit {
	
	constructor() {

	}

  ngOnInit() {
  }

}
