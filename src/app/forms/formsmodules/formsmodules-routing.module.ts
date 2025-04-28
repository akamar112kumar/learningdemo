import { registerLocaleData } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from '../registration/registration.component';
import { LoginComponent } from '../login/login.component';
import { EditComponent } from '../edit/edit.component';
import { FormComponent } from '../form/form.component';

const routes: Routes = [
  {path:'', component:RegistrationComponent},
  {path:'registration', component:RegistrationComponent},
  {path:'loging', component:LoginComponent},
  {path:'edit', component:EditComponent},
  {path:'form', component:FormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsmodulesRoutingModule { }
