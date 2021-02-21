import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RefinfoComponent } from './refinfo/refinfo.component';
import { TabsComponent } from './tabs/tabs.component';

const routes: Routes = [{
  path: 'ref/:refName', component: RefinfoComponent
  },
  {
    path: '', component: TabsComponent
  },
  {
    path: ':topnav', component: TabsComponent
  },
  {
    path: '**', redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
