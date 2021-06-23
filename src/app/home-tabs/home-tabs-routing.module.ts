import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeTabsPage } from './home-tabs.page';

// const routes: Routes = [
//   {
//     path: 'tabs',
//     component: HomeTabsPage,
//     children: [
//       {
//         path: 'practice',
//         children: [
//           {
//             path: '',
//             loadChildren: () => import('../practice-home/practice-home.module').then(m => m.PracticeHomePageModule)
//           },
//           {
//             path: 'quizz',
//             loadChildren: () => import('../quizz/quizz.module').then(m => m.QuizzPageModule)
//           },
//           {
//             path: 'final-result',
//             loadChildren: () => import('../final-score/final-score.module').then(m => m.FinalScorePageModule)
            
//           }
//         ]
//         // loadChildren: () => import('../practice-home/practice-home.module').then(m => m.PracticeHomePageModule)
//       },
//       {
//         path: 'learning',
//         children: [
//           {
//             path: '',
//             loadChildren: () => import('../learning-home/learning-home.module').then(m => m.LearningHomePageModule)
//           },
//           {
//             path: 'learning-hiragana-table',
//             loadChildren: () => import('../learning-hiragana-table/learning-hiragana-table.module').then(m => m.LearningHiraganaTablePageModule)
//           },
//           {
//             path: 'learning-hiragana-mnemonic',
//             loadChildren: () => import('../learning-hiragana-mnemonic/learning-hiragana-mnemonic.module').then(m => m.LearningHiraganaMnemonicPageModule)
//           },
//           {
//             path: 'learning-katakana-mnemonic',
//             loadChildren: () => import('../learning-katakana-mnemonic/learning-katakana-mnemonic.module').then( m => m.LearningKatakanaMnemonicPageModule)
//           }
              
//         ]
//       },
//       {
//         path: 'statistics',
//         loadChildren: () => import('../statistics/statistics.module').then(m => m.StatisticsPageModule)
//       },
    
        
  
//   // {
//   //   path: '',
//   //   redirectTo: 'learning',
//   //   pathMatch: 'full'
//   // },
      
      
//     ]
//   },
//   {
//     path: 'home',
//     loadChildren: () => import('../home-tabs/home-tabs.module').then(m => m.HomeTabsPageModule)
//   },
//   {
//     path: '',
//     redirectTo: 'home',
//     pathMatch: 'full'
//   }
  
// ];

const routes: Routes = [
  {
    path: '',
    component: HomeTabsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeTabsPageRoutingModule {}
