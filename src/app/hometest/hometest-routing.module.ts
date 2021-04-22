import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HometestPage } from './hometest.page';

const routes: Routes = [
  {
    path: '',
    component: HometestPage,
    children: [
      {
        path: 'tabs',
        loadChildren: () => import('../home-tabs/home-tabs.module').then(m => m.HomeTabsPageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HometestPageRoutingModule {}
