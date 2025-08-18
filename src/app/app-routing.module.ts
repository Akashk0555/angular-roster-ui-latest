import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Dashboard } from './components/dashboard/dashboard';
import { HttpClient } from '@angular/common/http';
import { ShowComponent } from './components/show/show.component';
import { ChatComponent } from './components/chat/chat.component';

const routes: Routes = [
  { path: '', component: Dashboard }, // 👈 This will be loaded on page reload

  {
    path: 'dashboard',
    children: [
      { path: 'overview', component: ShowComponent },
      {path:'stats',component:ChatComponent}
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
