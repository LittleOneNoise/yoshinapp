import { HomeTabsPageModule } from './home-tabs/home-tabs.module';
import { HomeTabsPage } from './home-tabs/home-tabs.page';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () => import('./home-tabs/home-tabs.module').then(m => m.HomeTabsPageModule)
  },
  {
    path: 'learning-hiragana-table',
    loadChildren: () => import('./learning-hiragana-table/learning-hiragana-table.module').then(m => m.LearningHiraganaTablePageModule)
  },
  {
    path: 'learning-hiragana-mnemonic',
    loadChildren: () => import('./learning-hiragana-mnemonic/learning-hiragana-mnemonic.module').then(m => m.LearningHiraganaMnemonicPageModule)
  },
  {
    path: 'quizz',
    loadChildren: () => import('./quizz/quizz.module').then(m => m.QuizzPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then(m => m.SettingsPageModule)
  },
  {
    path: 'info-kana',
    loadChildren: () => import('./info-kana/info-kana.module').then( m => m.InfoKanaPageModule)
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
