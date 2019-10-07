import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { BulmaRoutingModule } from './bulma-routing.module';
import { BulmaComponent } from './bulma.component';
import { ButtonsComponent } from './buttons/buttons.component';



@NgModule({
  declarations: [NavbarComponent, FooterComponent, BulmaComponent, ButtonsComponent],
  imports: [
    CommonModule,
    BulmaRoutingModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    BulmaComponent,
    BulmaRoutingModule
  ]
})
export class BulmaCssModule { }
