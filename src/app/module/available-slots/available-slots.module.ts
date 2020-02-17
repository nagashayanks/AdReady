import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AvailableSlotsRoutingModule } from './available-slots-routing.module';
import { SlotsComponent } from './slots/slots.component';
import { AddSlotsComponent } from './add-slots/add-slots.component';
import { SharedModuleModule } from 'src/app/shared/shared-module.module';


@NgModule({
  declarations: [SlotsComponent, AddSlotsComponent],
  imports: [
    CommonModule,
    AvailableSlotsRoutingModule,
    SharedModuleModule
  ]
})
export class AvailableSlotsModule { }
