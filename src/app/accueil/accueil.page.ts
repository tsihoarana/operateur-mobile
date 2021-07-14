import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { ToolService } from '../services/tool.service';
import { Router } from '@angular/router';
import { CustomLoadingComponent } from 'src/app/components/custom-loading/custom-loading.component';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.page.html',
  styleUrls: ['./accueil.page.scss'],
})
export class AccueilPage implements OnInit {
  is_loading : boolean = false;

  error_message : string = '';
  message : string = '';

  infos : any = {}; // total credit, total mvola


  constructor(public userServ : UserService, public toolServ : ToolService, public router : Router) { }

  ngOnInit() {
    this.toolServ.redirectIfNotLogged();
    this.fetchCurrentUserStatus();
  }

  doRefresh ($event) {
    this.fetchCurrentUserStatus($event);
  }

  fetchCurrentUserStatus (pull_event = null) {
    this.message = 'Veuillez patientez...';
    this.is_loading = true;
    const onSuccess = response => {
      if (response['status'] == 200) {
        this.infos = response['datas'];
        this.infos.numero = this.toolServ.formatNumero(this.infos.numero);
        this.infos.total_mvola = this.toolServ.formatMoney(this.infos.total_mvola);
        this.infos.total_credit = this.toolServ.formatMoney(this.infos.total_credit);
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

    const idclient : string = this.toolServ.getUserDataByKey('idclient');
    this.userServ.getClientStatus(idclient)
        .subscribe(onSuccess, onError);
  }
}
