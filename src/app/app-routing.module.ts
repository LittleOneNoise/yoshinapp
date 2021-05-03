import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //     path: 'tabs',
  //     loadChildren: () => import('./home-tabs/home-tabs.module').then(m => m.HomeTabsPageModule)
  //   },
  // {
  //   path: '',
  //   redirectTo: 'tabs',
  //   pathMatch: 'full'
  // },
  {
    path: '',
    loadChildren: () => import('./home-tabs/home-tabs.module').then(m => m.HomeTabsPageModule)
  },
  {
    path: 'learning-hiragana-table1',
    loadChildren: () => import('./learning-hiragana-table1/learning-hiragana-table1.module').then( m => m.LearningHiraganaTable1PageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
