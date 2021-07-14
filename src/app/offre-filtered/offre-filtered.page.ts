import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { ToolService } from '../services/tool.service';
import { OffreService } from '../services/offre.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-offre-filtered',
  templateUrl: './offre-filtered.page.html',
  styleUrls: ['./offre-filtered.page.scss'],
})
export class OffreFilteredPage implements OnInit {
  is_loading : boolean = false;
  empty_list : boolean = false;

  error_message : string = '';

  liste_offres : any[] = [];
  error_msg : string = '';

  typeoffre : any = {
    idtypeoffre : '', nom : '', default_duree : 0
  };

  constructor(
    public userServ : UserService, 
    public toolServ : ToolService, 
    public offreServ : OffreService, 
    public router : ActivatedRoute
  ) { }
  
  ngOnInit() {
    this.toolServ.redirectIfNotLogged();
    for (let key in this.typeoffre) {
      // exception SPECIAL_MOBILE => default_duree : undefined
      this.typeoffre[key] = this.router.snapshot.queryParamMap.get(key) || '';
    }

    this.fetchListOffre();
  }

  makeNice (str : string) {
    return this.toolServ.formatNicely(str);
  }

  doRefresh ($event) {
    this.fetchListOffre($event);
  }

  fetchListOffre (pull_event = null) {
    this.is_loading = true;
    
    const onSuccess = response => {
      if (response['status'] == 200) {
        
        this.liste_offres = response['datas'].map((item : any) => {
          item.prix = this.toolServ.formatMoney(item.prix);
          
          item.infos = item.details.map(detail => {
            const type = detail.type_detail;
            // ex : 320 Mo, 200 Ar, 500
            const valeur = this.toolServ.displayProperlyWithUnit(detail.valeur, type);
            return `${this.makeNice(detail.type_detail)} ${valeur}`;
          }).sort().join(' + ');

          return item;
        });

        console.log(this.liste_offres);
		    this.empty_list = this.liste_offres.length == 0;
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

    this.offreServ.getOffreByIdtype(this.typeoffre.idtypeoffre)
        .subscribe(onSuccess, onError);
  }

  acheter (idoffre : string) {
    this.is_loading = true;
    
    const onSuccess = response => {
      if (response['status'] == 200) {
        this.toolServ.presentToast(response['datas']);        
      } else {
        let message = response['datas'] || 'Erreur requete';
        this.toolServ.presentToast(message);
      }
      this.is_loading = false;
    };
    const onError = response => {
      this.is_loading = false;
      this.error_message = 'Erreur interne';
    };

    this.offreServ.acheterOffre(idoffre)
        .subscribe(onSuccess, onError);
  }
}
