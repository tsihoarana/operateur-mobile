import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ToolService } from './services/tool.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Accueil',
      url: '/accueil',
      icon: 'home',
      hide : false
    },
    {
      title: 'Offres',
      url: '/offres',
      icon: 'list',
      hide : false
    },
    {
      title: 'Vos offres',
      url: '/vos-offres',
      icon: 'timer',
      hide : false
    },
    {
      title: 'Liste appels',
      url: '/liste-appel',
      icon: 'call',
      hide : false
    },
    {
      title: 'Achat credit',
      url: '/ajouter-credit',
      icon: 'basket',
      hide : false
    },
    {
      title: 'Depot',
      url: '/mvola',
      icon: 'briefcase',
      hide : false
    },
    {
      title: 'Deconnexion',
      url: '/logout',
      icon: 'walk',
      hide : false
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public toolServ: ToolService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }

  isLogged () {
    return this.toolServ.isLogged();
  }
}
