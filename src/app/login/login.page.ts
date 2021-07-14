import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { ToolService } from '../services/tool.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  numero : string = '0340000001';
  password : string = '1234';

  error_msg : string = '';
  is_loading : boolean = false;

  
  constructor(public userServ : UserService, public toolServ : ToolService, public router : Router) { }

  ngOnInit() {
    this.toolServ.redirectToHomeIfConnected();
  }

  doRefresh ($event) {
    $event.target.complete();
  }

  seConnecter () {
    this.is_loading = true;
    this.toolServ.presentToast('Veuillez patientez...');

    const onSuccess = response => {
      if (response['status'] == 200) {
        const my = response['datas'];
        const data = {
          token_value : my['token_value'],
          nom : my['client']['nom'],
          prenom : my['client']['prenom'],
          numero : my['client']['numero'],
          idclient : my['client']['idclient'],
          date_naissance : my['client']['date_naissance'] 
        };

        this.toolServ.setUser(data);
        // redirection
        this.router.navigate(['/accueil']);
        console.log(this.toolServ.getUserData());
        this.toolServ.presentToast('Bienvenue ' + this.toolServ.getUserDataByKey('nom') );
      } else {
        this.error_msg = response['datas'] || 'Erreur connexion';
        this.toolServ.presentToast('Erreur connexion');
      }
      this.is_loading = false;
      console.log(response);
    };

    const onError = response => {
      this.is_loading = false;
      this.error_msg = 'Erreur interne';
      this.toolServ.presentToast('Erreur interne');
    };

    this.userServ.connect(this.numero, this.password)
        .subscribe(onSuccess, onError);
  }

}
