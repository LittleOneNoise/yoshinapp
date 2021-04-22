import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
      path: 'tabs',
      loadChildren: () => import('./home-tabs/home-tabs.module').then(m => m.HomeTabsPageModule)
    },
  //   {
  //     path: 'practicepath',
  //     loadChildren: () => import('./practice-home/practice-home.module').then(m => m.PracticeHomePageModule)
  //   },
  //   {
  //     path: 'learningpath',
  //     loadChildren: () => import('./learning-home/learning-home.module').then(m => m.LearningHomePageModule)
  //   },
  // {
  //   path: 'hometest',
  //   loadChildren: () => import('./hometest/hometest.module').then( m => m.HometestPageModule)
  // },
  {
    path: '',
    redirectTo: 'tabs',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
