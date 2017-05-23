import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CoreModule } from './core/core.module';
import { MasterpageComponent } from './core/masterpage/masterpage.component';

@NgModule({
  declarations: [ ],
  imports: [
    BrowserModule,
    CoreModule,
    FormsModule,
    HttpModule,
  ],
  providers: [],
  bootstrap: [ MasterpageComponent ]
})
export class AppModule { }
