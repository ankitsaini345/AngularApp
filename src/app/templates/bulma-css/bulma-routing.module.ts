import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { FormsComponent } from './forms/forms.component';


const route: Routes = [
  { path : 'navbar', component : NavbarComponent},
  { path : 'footer', component : FooterComponent},
  { path : 'forms', component : FormsComponent},
  { path : 'buttons', component : ButtonsComponent}
]
@NgModule(
  {
    imports : [ RouterModule.forChild(route) ],
    exports : [ RouterModule ]
  }
)
export class BulmaRoutingModule {}
