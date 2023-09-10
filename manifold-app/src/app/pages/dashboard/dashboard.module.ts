import { NgModule } from '@angular/core';

import { DashboardRoutingModule } from './dashboard-routing.module';

import { CommonModule } from '@angular/common';
import { DashboardKpiComponent } from './components/dashboard-kpi/dashboard-kpi.component';
import { DashboardSubscriptionComponent } from './components/dashboard-subscription/dashboard-subscription.component';
import { FooterComponent } from './components/footer.component';
import { StatscardComponent } from './components/statscard/statscard.component';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  imports: [CommonModule, DashboardRoutingModule],
  declarations: [
    DashboardComponent,
    StatscardComponent,
    DashboardKpiComponent,
    DashboardSubscriptionComponent,
    FooterComponent,
  ],
  exports: [DashboardComponent],
})
export class DashboardModule {}
