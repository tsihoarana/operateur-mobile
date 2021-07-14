import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreditService } from '../services/credit.service';
import { ToolService } from '../services/tool.service';

@Component({
  selector: 'app-ajouter-credit',
  templateUrl: './ajouter-credit.page.html',
  styleUrls: ['./ajouter-credit.page.scss'],
})
export class AjouterCreditPage implements OnInit {
  montant : number;
  error_msg : string = '';
  is_loading : boolean = false;

  constructor(
    public toolServ : ToolService, 
    public creditServ : CreditService, 
    public router : Router
  ) { }

  ngOnInit() {
    this.toolServ.redirectIfNotLogged();
  }
  
  doRefresh ($event) {
    $event.target.complete();
  }

  acheter () {
    this.toolServ.presentToast('Veuillez patientez...');
    this.is_loading = true;
    const onSuccess = response => {
      if (response['status'] == 200) {
        // redirection
        this.toolServ.presentToast('Achat ' + this.montant + 'Ar reussi' );
      } else {
        let msg = response['datas'] || 'Erreur connexion';
        this.toolServ.presentToast(msg);
      }
      this.is_loading = false;
      console.log(response);
    };

    const onError = response => {
      this.is_loading = false;
      this.toolServ.presentToast('Erreur interne');
    };

    this.creditServ.acheter(this.montant)
        .subscribe(onSuccess, onError);
  }

}
