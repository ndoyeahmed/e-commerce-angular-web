import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { MainContentComponent } from './main-content/main-content.component';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [MenuComponent, FooterComponent, NewsletterComponent, MainContentComponent],
  exports: [
    MenuComponent,
    NewsletterComponent,
    FooterComponent,
    MainContentComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class LayoutModule { }
