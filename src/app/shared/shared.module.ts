import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarritoService } from 'app/service/carrito.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    CarritoService
  ]
})
export class SharedModule { }
