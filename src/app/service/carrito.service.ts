import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import * as Rx from 'rxjs/Rx';
import { Producto } from './../model/producto';
import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class CarritoService {

  private subject: BehaviorSubject<Producto[]> = new BehaviorSubject([]);
  private itemsCarrito: Producto[] = [];

  constructor() {
    this.subject.subscribe(data => this.itemsCarrito = data);
  }

  /**
   * addCarrito
   * @param producto
   */
  addCarrito(producto: Producto) {
    this.subject.next([...this.itemsCarrito, producto]);
  }

  /**
   * clearCarrito
   */
  clearCarrito() {
    this.subject.next(null);
  }

  /**
   * getCarrito
   */
  getCarrito(): Observable<Producto[]> {
    return this.subject;
  }

  /**
   * getTotal
   */
  getTotal() {
    return this.itemsCarrito.reduce((total, producto: Producto) => { return total + producto.precio; }, 0);
  }

  


}
