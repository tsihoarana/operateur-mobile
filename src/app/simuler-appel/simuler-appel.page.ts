import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppelService } from '../services/appel.service';
import { ToolService } from '../services/tool.service';

@Component({
  selector: 'app-simuler-appel',
  templateUrl: './simuler-appel.page.html',
  styleUrls: ['./simuler-appel.page.scss'],
})
export class SimulerAppelPage implements OnInit {
  error_msg : string = '';
  cible : string = '';
  duree : number;

  is_loading : boolean = false;
  message : string = '';

  constructor(
    public appelServ : AppelService, 
    public toolServ : ToolService, 
    public router : Router) { }

  ngOnInit() {
    this.toolServ.redirectIfNotLogged();
  }

  doRefresh ($event) {
    $event.target.complete();
  }

  appeler () {
    this.toolServ.presentToast('Veuillez patientez...');
    this.is_loading = true;
    const onSuccess = response => {
      if (response['status'] == 200) {
        let msg = response['datas'] || 'Appel reussi';
        this.toolServ.presentToast( msg );
      } else {
        let msg = response['datas'] || 'Erreur connexion';
        this.toolServ.presentToast(msg);
      }
      this.message = '';
      this.is_loading = false;
    };

    const onError = response => {
      this.message = '';
      this.is_loading = false;
      this.toolServ.presentToast('Erreur interne');
    };

    this.appelServ.effectuerAppel(this.cible, this.duree)
        .subscribe(onSuccess, onError);
  }

}
