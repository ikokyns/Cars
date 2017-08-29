import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarsService } from '../shared/services/cars.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [
  ],
  providers: [
  	CarsService
  ],
  exports: [
  ]
})
export class SharedModule { }