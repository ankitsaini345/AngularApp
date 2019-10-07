import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { BulmaRoutingModule } from './bulma-routing.module';
import { BulmaComponent } from './bulma.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { FormsComponent } from './forms/forms.component';



@NgModule({
  declarations: [NavbarComponent, FooterComponent, BulmaComponent, ButtonsComponent, FormsComponent],
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
