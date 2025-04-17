import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { MainpageComponent } from './layout/mainpage/mainpage.component';
import { AboutComponent } from './component/about/about.component';
import { TableComponent } from './directives/table/table.component';
import { LoginComponent } from './access/login/login.component';
import { ContactComponent } from './component/contact/contact.component';
import { ParentComponent } from './component/parent/parent.component';
import { ChildComponent } from './component/child/child.component';
import { RxjsComponent } from './component/rxjs/rxjs.component';
import { ReactiveComponent } from './access/reactive/reactive.component';
import { DecoratorsComponent } from './study/decorators/decorators.component';



export const routes: Routes = [
{path: 'home', component: HomeComponent},
{path: 'about', component: AboutComponent},
{path: 'table', component: TableComponent},
{path: 'login', component: LoginComponent},
{path: 'contact', component:ContactComponent},
{path: 'parent', component:ParentComponent},
{path: 'child', component:ChildComponent},
{path:'rxjs', component:RxjsComponent},
{path:'Reactive', component:ReactiveComponent},
{
    path:'study',
    loadChildren:()=>import('./study/study.module').then(m=>m.StudyModule)

},
{path: '**', component: MainpageComponent}

];
