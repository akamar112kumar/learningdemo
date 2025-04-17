import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DecoratorsComponent } from './decorators/decorators.component';
import { PipeComponent } from './pipe/pipe.component';
import { AnotationComponent } from './anotation/anotation.component';
import { LearnComponent } from './learn/learn.component';

const routes: Routes = [
  {path:'',component:LearnComponent},
  {path:'study/decorater',
    component:DecoratorsComponent
  },
  {path:'study/pipe',
    component:PipeComponent
  },
  {path:'study/anotation',
    component:AnotationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudyRoutingModule { }
