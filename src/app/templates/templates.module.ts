import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BulmaCssModule } from './bulma-css/bulma-css.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BulmaCssModule
  ],
  exports: [
    BulmaCssModule
  ]
})
export class TemplatesModule { }
