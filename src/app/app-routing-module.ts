import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Dashboard } from './components/dashboard/dashboard';
import { HttpClient } from '@angular/common/http';

const routes: Routes = [
  {
    path:'',
    component:Dashboard
  },
  {
    path:'home',
    component:Dashboard
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
