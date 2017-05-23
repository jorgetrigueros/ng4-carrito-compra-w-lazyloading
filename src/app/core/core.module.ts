import { CarritoService } from './../service/carrito.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MasterpageComponent } from './masterpage/masterpage.component';
import { TopBarComponent } from './masterpage/top-bar/top-bar.component';
import { MainContentComponent } from './masterpage/main-content/main-content.component';
import { SharedModule } from './../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: './../home/home.module#HomeModule'
  },
  {
    path: 'about',
    loadChildren: './../about/about.module#AboutModule'
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    SharedModule
  ],
  declarations: [
    MasterpageComponent,
    TopBarComponent,
    MainContentComponent,
  ],
  exports: [
    MasterpageComponent
  ]
})
export class CoreModule { }
