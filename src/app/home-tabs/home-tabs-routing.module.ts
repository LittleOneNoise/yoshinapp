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
        path: 'practicetab',
        children: [
          {
          path: '',
          loadChildren: () => import('../practice-home/practice-home.module').then(m => m.PracticeHomePageModule)
          },
          {
            path: 'practice-amount',
            children: [
              {
                path: '',
                loadChildren: () => import('../practice-amount/practice-amount.module').then(m => m.PracticeAmountPageModule)
              },
              {
                path: 'quizzalpha',
                loadChildren: () => import('../quizzalpha/quizzalpha.module').then(m => m.QuizzalphaPageModule)
              }
            ]
            
          }
        ]
        // loadChildren: () => import('../practice-home/practice-home.module').then(m => m.PracticeHomePageModule)
      },
      {
        path: 'learningtab',
        children: [
          {
            path: '',
            loadChildren: () => import('../learning-home/learning-home.module').then(m => m.LearningHomePageModule)
          },
          {
            path: 'learning-hiragana',
            children: [
              {
                path: '',
                loadChildren: () => import('../learning-hiragana-menu/learning-hiragana-menu.module').then(m => m.LearningHiraganaMenuPageModule)
              },
              {
                path: 'mnemonic',
                loadChildren: () => import('../learning-hiragana-mnemonic/learning-hiragana-mnemonic.module').then(m => m.LearningHiraganaMnemonicPageModule)
              },
              {
                path: 'table',
                loadChildren: () => import('../learning-hiragana-table/learning-hiragana-table.module').then(m => m.LearningHiraganaTablePageModule)
              }
            ]
          }
        ]
        
      },
      {
        path: '',
        redirectTo: 'learningtab',
        pathMatch: 'full'
      },
      
    ]
  },
  {
    path: '',
    redirectTo: 'tabs/practicetab',
    pathMatch: 'full'
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeTabsPageRoutingModule {}
