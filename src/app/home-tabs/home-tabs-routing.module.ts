import { PracticeHomePageModule } from './../practice-home/practice-home.module';
import { LearningHomePageModule } from './../learning-home/learning-home.module';
import { LearningHomePage } from './../learning-home/learning-home.page';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeTabsPage } from './home-tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: HomeTabsPage,
    children: [
      {
        path: 'practicepath',
        children: [
          {
          path: '',
          loadChildren: () => import('../practice-home/practice-home.module').then(m => m.PracticeHomePageModule)
          },
          {
            path: 'practice-amount',
            loadChildren: () => import('../practice-amount/practice-amount.module').then(m => m.PracticeAmountPageModule)
          }
        ]
        // loadChildren: () => import('../practice-home/practice-home.module').then(m => m.PracticeHomePageModule)
      },
      {
        path: 'learningpath',
        loadChildren: () => import('../learning-home/learning-home.module').then(m => m.LearningHomePageModule)
      },
      {
        path: '',
        redirectTo: 'practicepath',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'tabs/practicepath',
    pathMatch: 'full'
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeTabsPageRoutingModule {}
