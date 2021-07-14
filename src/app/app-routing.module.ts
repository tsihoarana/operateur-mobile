import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'logout',
    loadChildren: () => import('./logout/logout.module').then( m => m.LogoutPageModule)
  },
  {
    path: 'accueil',
    loadChildren: () => import('./accueil/accueil.module').then( m => m.AccueilPageModule)
  },
  {
    path: 'liste-appel',
    loadChildren: () => import('./liste-appel/liste-appel.module').then( m => m.ListeAppelPageModule)
  },
  {
    path: 'mvola',
    loadChildren: () => import('./mvola/mvola.module').then( m => m.MvolaPageModule)
  },
  {
    path: 'simuler-appel',
    loadChildren: () => import('./simuler-appel/simuler-appel.module').then( m => m.SimulerAppelPageModule)
  },
  {
    path: 'vos-offres',
    loadChildren: () => import('./vos-offres/vos-offres.module').then( m => m.VosOffresPageModule)
  },  {
    path: 'offres',
    loadChildren: () => import('./offres/offres.module').then( m => m.OffresPageModule)
  },
  {
    path: 'inscription',
    loadChildren: () => import('./inscription/inscription.module').then( m => m.InscriptionPageModule)
  },
  {
    path: 'ajouter-credit',
    loadChildren: () => import('./ajouter-credit/ajouter-credit.module').then( m => m.AjouterCreditPageModule)
  },
  {
    path: 'simulation',
    loadChildren: () => import('./simulation/simulation.module').then( m => m.SimulationPageModule)
  },
  {
    path: 'offre-filtered',
    loadChildren: () => import('./offre-filtered/offre-filtered.module').then( m => m.OffreFilteredPageModule)
  },
  {
    path: 'sms',
    loadChildren: () => import('./sms/sms.module').then( m => m.SmsPageModule)
  },
  {
    path: 'internet',
    loadChildren: () => import('./internet/internet.module').then( m => m.InternetPageModule)
  }



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
