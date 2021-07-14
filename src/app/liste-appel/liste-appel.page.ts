import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { ToolService } from '../services/tool.service';
import { Router } from '@angular/router';
import { AppelService } from '../services/appel.service';

@Component({
  selector: 'app-liste-appel',
  templateUrl: './liste-appel.page.html',
  styleUrls: ['./liste-appel.page.scss'],
})
export class ListeAppelPage implements OnInit {
  is_loading : boolean = false;
  empty_list : boolean = false;

  error_message : string = '';
  message : string = '';

  liste_appel : any[] = []; 

  constructor(
    public userServ : UserService, 
    public toolServ : ToolService, 
    public appelServ : AppelService, 
    public router : Router
  ) { }

  ngOnInit() {
    this.toolServ.redirectIfNotLogged();
    this.fetchListAppel();
  }

  doRefresh ($event) {
    this.fetchListAppel($event);
  }

  fetchListAppel (pull_event = null) {
    this.message = 'Veuillez patientez...';
    this.is_loading = true;
    
    const onSuccess = response => {
      if (response['status'] == 200) {
        
        this.liste_appel = response['datas'].map(appel => {
          appel.date = this.toolServ.formatJSONDate(appel.date);
          appel.duree = this.toolServ.formatMinute(appel.duree);
          appel.numeroCible = this.toolServ.formatNumero(appel.numeroCible);
          return appel;
        });
		
		this.empty_list = this.liste_appel.length == 0;

      } else {
        // dans ce cas-ci, datas contient les erreurs
        // si non definie, retourner tout simplement un message par defaut
        this.error_message = response['datas'] || 'Erreur requete';
      }

      this.message = '';
      this.is_loading = false;

      if (pull_event != null)
        pull_event.target.complete();
    };

    const onError = response => {
      this.message = '';
      this.is_loading = false;
      this.error_message = 'Erreur interne';
    };

    this.appelServ.getAllAppel()
        .subscribe(onSuccess, onError);
  }
}
