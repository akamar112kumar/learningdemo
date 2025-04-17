import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'PrimeNG/api';
import { MenuModule } from 'primeng/menu'; 
import { Menubar } from 'primeng/menubar';
import { AvatarModule } from 'primeng/avatar';
import { CommonModule } from '@angular/common';
import { MenubarModule } from 'primeng/menubar';
import { BadgeModule } from 'primeng/badge';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { LoginService } from '../../services/login.service';


import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Checkbox } from 'primeng/checkbox';

@Component({
  selector: 'app-top-menu',
  standalone: true,
  imports: [BadgeModule, AvatarModule, CommonModule, MenubarModule,RouterLink,ButtonModule,ReactiveFormsModule, Checkbox],
  templateUrl: './top-menu.component.html',
  styleUrl: './top-menu.component.scss'
})
export class TopMenuComponent implements OnInit{
    loginaccessdata!:boolean;
    city:any;
    log: any;
    Addition(num:number,num1:number):any{
        return num + num1;

    }
    showmasg(ms:string):any{
        return ms;
    }

  items: MenuItem[] | undefined;

  formGroup!: FormGroup;


  constructor(private loginaccessvalue:LoginService){}
showloginvalue(){
    this.city = this.formGroup.value;
    console.log("final test",this.loginaccessdata);
    console.log("final check",this.city);
    
    
}
  getloginvalueAccess(){
    this.loginaccessvalue.getbehaviourvalue().subscribe((data)=>{
      this.loginaccessdata = data;
    });
  }



  ngOnInit() {
    this.formGroup = new FormGroup({
        city: new FormControl(true)
    });
   
    this.getloginvalueAccess();
    this.items = [
        {
            label: 'Home',
            routerLink: '/home',
            routerLinkActive: 'active',
            ariaCurrentWhenActive: 'page',
            icon: 'pi pi-home'
        },
        {
            label: 'parent',
            routerLink: '/parent',
            routerLinkActive: 'active',
            ariaCurrentWhenActive: 'page',
            icon: 'pi pi-home'
        },
        {
            label: 'child',
            routerLink: '/child',
            routerLinkActive: 'active',
            ariaCurrentWhenActive: 'page',
            icon: 'pi pi-home'
        },
        {
            routerLink: '/about',
            routerLinkActive: 'active',
            ariaCurrentWhenActive: 'page',
            label: 'About',
            icon: 'pi pi-star'
        },
        {
            label: 'Projects',
            logincondition:'shortcut',
            icon: 'pi pi-search',
            items: [
                {
                    routerLink: '/table',
                    routerLinkActive: 'active',
                    ariaCurrentWhenActive: 'page',
                    label: 'table_directive',
                    icon: 'pi pi-bolt'
                },
                {
                    label: 'Blocks',
                    icon: 'pi pi-server'
                },
                {
                    label: 'UI Kit',
                    icon: 'pi pi-pencil'
                },
                {
                    label: 'Templates',
                    icon: 'pi pi-palette',
                    items: [
                        {
                            label: 'Apollo',
                            icon: 'pi pi-palette'
                        },
                        {
                            label: 'Ultima',
                            icon: 'pi pi-palette'
                        }
                    ]
                }
            ]
        },
        {
            routerLink: '/contact',
            routerLinkActive: 'active',
            ariaCurrentWhenActive: 'page',
            label: 'Contact',
            icon: 'pi pi-envelope'
        },
        {
            label: 'login',
            logincondition:'iconreqire',
            icon: 'pi pi-user',
            routerLink: '/login',
            login:[
                {
                    routerLink: '/login',
                }
            ],
            routerLinkActive: 'active',
            ariaCurrentWhenActive: 'page',
        },
        {
            routerLink: '/rxjs',
            routerLinkActive: 'active',
            ariaCurrentWhenActive: 'page',
            label: 'Rxjs',
        },
        {
            routerLink: '/Reactive',
            routerLinkActive: 'active',
            ariaCurrentWhenActive: 'page',
            label: 'Reactive',
        },
        {
            routerLink: '/study',
            routerLinkActive: 'active',
            ariaCurrentWhenActive: 'page',
            label: 'study',
        }
      ]
    }
     
}
