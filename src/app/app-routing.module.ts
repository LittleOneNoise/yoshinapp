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
    path: 'learning-katakana-table',
    loadChildren: () => import('./learning-katakana-table/learning-katakana-table.module').then(m => m.LearningKatakanaTablePageModule)
  },
  {
    path: 'practice-menu',
    loadChildren: () => import('./practice-home/practice-home.module').then(m => m.PracticeHomePageModule)
  },
  {
    path: 'quizz',
    loadChildren: () => import('./quizz/quizz.module').then(m => m.QuizzPageModule)
  },
  {
    path: 'final-result',
    loadChildren: () => import('./final-score/final-score.module').then(m => m.FinalScorePageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then(m => m.SettingsPageModule)
  },
  {
    path: 'confirmation',
    loadChildren: () => import('./confirmation-popup/confirmation-popup.module').then(m => m.ConfirmationPopupPageModule)
  },
  {
    path: 'info-kana',
    loadChildren: () => import('./info-kana/info-kana.module').then( m => m.InfoKanaPageModule)
  },
  {
    path: 'confirmation-popup',
    loadChildren: () => import('./confirmation-popup/confirmation-popup.module').then( m => m.ConfirmationPopupPageModule)
  },
  {
    path: 'learning-katakana-table',
    loadChildren: () => import('./learning-katakana-table/learning-katakana-table.module').then( m => m.LearningKatakanaTablePageModule)
  },
  {
    path: 'learning-katakana-table1',
    loadChildren: () => import('./learning-katakana-table1/learning-katakana-table1.module').then( m => m.LearningKatakanaTable1PageModule)
  },
  {
    path: 'learning-katakana-table2',
    loadChildren: () => import('./learning-katakana-table2/learning-katakana-table2.module').then( m => m.LearningKatakanaTable2PageModule)
  },
  {
    path: 'learning-katakana-table3',
    loadChildren: () => import('./learning-katakana-table3/learning-katakana-table3.module').then( m => m.LearningKatakanaTable3PageModule)
  },  {
    path: 'learning-katakana-table4',
    loadChildren: () => import('./learning-katakana-table4/learning-katakana-table4.module').then( m => m.LearningKatakanaTable4PageModule)
  }






];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
