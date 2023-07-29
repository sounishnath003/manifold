import { NgModule } from '@angular/core';

import { DashboardRoutingModule } from './dashboard-routing.module';

import { CommonModule } from '@angular/common';
import { StatscardComponent } from './components/statscard/statscard.component';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  imports: [CommonModule, DashboardRoutingModule],
  declarations: [DashboardComponent, StatscardComponent],
  exports: [DashboardComponent],
})
export class DashboardModule {}
