import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MvolaService } from '../services/mvola.service';
import { ToolService } from '../services/tool.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-mvola',
  templateUrl: './mvola.page.html',
  styleUrls: ['./mvola.page.scss'],
})
export class MvolaPage implements OnInit {
  montant : any;
  error_msg : string = '';
  is_loading : boolean = false;


  constructor(public userServ : UserService, 
    public toolServ : ToolService, 
    public mvolaServ : MvolaService, 
    public router : Router) { }

  ngOnInit() {
    this.toolServ.redirectIfNotLogged();
  }
  
  doRefresh ($event) {
    $event.target.complete();
  }

  deposer () {
    this.is_loading = true;
    const onSuccess = response => {
      if (response['status'] == 200) {
        // redirection
        this.router.navigate(['/mvola']);
        console.log(this.toolServ.getUserData());
        this.toolServ.presentToast('Depot ' + this.montant + ' reussi' );
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

    this.mvolaServ.deposer(this.montant)
        .subscribe(onSuccess, onError);
  }

}
