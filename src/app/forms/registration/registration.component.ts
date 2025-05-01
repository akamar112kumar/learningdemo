import { Component } from '@angular/core';
import { RegisterComponent } from "../../access/register/register.component";
import { FormComponent } from "../form/form.component";

@Component({
  selector: 'app-registration',
  imports: [FormComponent],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss'
})
export class RegistrationComponent {

}
