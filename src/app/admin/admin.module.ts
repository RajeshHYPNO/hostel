import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { TicketsComponent } from './tickets/tickets.component';
import { StudentsComponent } from './students/students.component';
import { HostelsComponent } from './hostels/hostels.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';


@NgModule({
  declarations: [
    AdminDashboardComponent,
    TicketsComponent,
    StudentsComponent,
    HostelsComponent,
    FeedbackComponent,
    AdminHomeComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
