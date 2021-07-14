import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToolService } from '../services/tool.service';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.page.html',
  styleUrls: ['./inscription.page.scss'],
})
export class InscriptionPage implements OnInit {
  numero : string = '0340000003';
  nom : string = '';
  prenom : string = '';
  date_naissance : string = '1999-01-01';
  password : string = '';

  message : string = '';
  is_loading : boolean = false;

  constructor(public userServ : UserService, public toolServ : ToolService, public router : Router) { }

  ngOnInit() {
    this.toolServ.redirectToHomeIfConnected();
  }

  doRefresh ($event) {
    $event.target.complete();
  }

  sInscrire () {
    this.toolServ.presentToast('Veuillez patientez...');
    this.is_loading = true;
    let info = {
      'numero' : this.numero,
      'nom' : this.nom,
      'prenom' : this.prenom,
      'date_naissance' : this.date_naissance,
      'password' : this.password
    };
    const success = response => {
      if (response['status'] == 200) {
        // redirection
        this.router.navigate(['/login']);

        this.toolServ.presentToast('Inscription complete');
      } else {
        let message = response['datas'] || 'Erreur inscription';
        this.toolServ.presentToast(message);
      }
      this.is_loading = false;
    };
    const error = response => {
      this.is_loading = false;
      this.toolServ.presentToast('Erreur inscription');
    };

    this.userServ.inscription(info)
      .subscribe(success, error);
  }

}
