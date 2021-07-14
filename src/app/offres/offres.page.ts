import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OffreService } from '../services/offre.service';
import { ToolService } from '../services/tool.service';
import { UserService } from '../services/user.service';
import { MoneyFormatPipe  } from '../pipes/money-format.pipe';


@Component({
  selector: 'app-offres',
  templateUrl: './offres.page.html',
  styleUrls: ['./offres.page.scss'],
})
export class OffresPage implements OnInit {
  is_loading : boolean = false;
  empty_list : boolean = false;

  error_message : string = '';

  liste_types_offre : any[] = [];
  error_msg : string = '';

  constructor(
    public userServ : UserService, 
    public toolServ : ToolService, 
    public offreServ : OffreService, 
    public router : Router
  ) { }

  ngOnInit() {
    this.toolServ.redirectIfNotLogged();
    this.fetchListOffre();
  }

  doRefresh ($event) {
    this.fetchListOffre($event);
  }
  
  makeNice (str : string) {
    return this.toolServ.formatNicely(str);
  }

  fetchListOffre (pull_event = null) {
    this.is_loading = true;
    
    const onSuccess = response => {
      if (response['status'] == 200) {
        this.liste_types_offre = response['datas'];
		    this.empty_list = this.liste_types_offre.length == 0;
      } else {
        let message = response['datas'] || 'Erreur requete';
        this.toolServ.presentToast(message);
      }
      this.is_loading = false;
      if (pull_event != null)
        pull_event.target.complete();
    };

    const onError = response => {
      this.is_loading = false;
      this.error_message = 'Erreur interne';
    };
    this.offreServ.getAllTypesOffre()
        .subscribe(onSuccess, onError);
  }

}
