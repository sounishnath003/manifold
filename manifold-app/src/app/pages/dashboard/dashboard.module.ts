import { NgModule } from '@angular/core';

import { DashboardRoutingModule } from './dashboard-routing.module';

import { ConversationalComponent } from '../conversational/conversational.component';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  imports: [DashboardRoutingModule],
  declarations: [DashboardComponent, ConversationalComponent],
  exports: [DashboardComponent],
})
export class DashboardModule {}
