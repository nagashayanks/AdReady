import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlansRoutingModule } from './plans-routing.module';
import { ViewPlanComponent } from './view-plan/view-plan.component';
import { SharedModuleModule } from './../../shared/shared-module.module';


@NgModule({
  declarations: [ViewPlanComponent],
  imports: [
    CommonModule,
    PlansRoutingModule,
    SharedModuleModule
  ]
})
export class PlansModule { }
