import { Component, OnInit } from '@angular/core';
import { CarritoService } from './../service/carrito.service';
import { ProductosService } from './../service/productos.service';
import { Producto } from './../model/producto';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [],
  providers: [ProductosService]
})
export class SidebarComponent implements OnInit {
  private productos: any = [];

  constructor(private carritoService: CarritoService, private productosService: ProductosService) { }

  ngOnInit() {
    this.getNovedades();
  }

  /**
   * getNovedades: Obtener los productos que son novedad
   */
  getNovedades() {
    this.productosService.getProductos()
      .then(data => {
        this.productos = (data as Array<Producto>).filter(x => x.novedad);
      })
      .catch(error => alert(error));
  }

  /**
   * addProducto
   */
  addProducto(producto) {
    this.carritoService.addCarrito(producto);
  }

}
