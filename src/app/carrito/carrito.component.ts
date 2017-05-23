import { Producto } from './../model/producto';
import { Subscription } from 'rxjs/Subscription';
import { Component, OnInit } from '@angular/core';
import { CarritoService } from './../service/carrito.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styles: []
})
export class CarritoComponent implements OnInit {

  private carrito: Array<Producto> = [];
  private subscription: Subscription;
  private total: number;

  constructor(private carritoService: CarritoService) { }

  ngOnInit() {
    this.carritoService.getCarrito().subscribe(data => {
      console.log(data);
      this.carrito = data;
      this.total = this.carritoService.getTotal();
    },
      error => alert(error));
  }

}
