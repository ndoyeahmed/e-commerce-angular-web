import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import {PagesRoutingModule} from './pages-routing.module';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [ProductsComponent, HomeComponent],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
