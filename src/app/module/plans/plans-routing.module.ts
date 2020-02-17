import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewPlanComponent } from './view-plan/view-plan.component';


const routes: Routes = [
  {
    path: '',
    component: ViewPlanComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlansRoutingModule { }
