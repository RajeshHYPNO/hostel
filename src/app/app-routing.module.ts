import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminModule } from './admin/admin.module';

const routes: Routes = [
  {
    path:'',
    component:LoginComponent,
  },
  {
    path:'login',
    component:LoginComponent,
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: 'student',
    loadChildren: () => import('./student/student.module').then(s => s.StudentModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
