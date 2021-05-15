import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home-tabs/home-tabs.module').then(m => m.HomeTabsPageModule)
  },
  {
    path: 'easter-egg',
    loadChildren: () => import('./easter-egg/easter-egg.module').then( m => m.EasterEggPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
