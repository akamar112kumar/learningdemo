import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DecoratorsComponent } from './decorators/decorators.component';
import { PipeComponent } from './pipe/pipe.component';
import { AnotationComponent } from './anotation/anotation.component';
import { LearnComponent } from './learn/learn.component';
import { SignalsComponent } from './signals/signals.component';
import { ArrowFComponent } from './arrow-f/arrow-f.component';
import { ListComponent } from '../layout/list/list.component';

const routes: Routes = [
  {path:'',component:LearnComponent},
  {path:'study/decorater',
    component:DecoratorsComponent
  },
  {path:'study/signals', component:SignalsComponent},
  {path:'study/pipe',
    component:PipeComponent
  },
  {path:'study/anotation',
    component:AnotationComponent
  },
  {path:'study/arrow',
    component:ArrowFComponent
  },
  {
    path:'study/list',
    component:ListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudyRoutingModule { }
