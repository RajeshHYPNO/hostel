import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { TicketsComponent } from './tickets/tickets.component';
import { StudentsComponent } from './students/students.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { HostelsComponent } from './hostels/hostels.component';

const routes: Routes = [
  {
    path:'',
    component:AdminHomeComponent,
    children:[
      {
        path:'',
        redirectTo:'students',
        pathMatch: 'full'
      },
      {
        path:'tickets',
        component:TicketsComponent
      },
      {
        path:'students',
        component:StudentsComponent
      },
      {
        path:'feedback',
        component:FeedbackComponent
      },
      {
        path:'hostels',
        component:HostelsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
