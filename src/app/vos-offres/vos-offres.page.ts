import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OffreService } from '../services/offre.service';
import { ToolService } from '../services/tool.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-vos-offres',
  templateUrl: './vos-offres.page.html',
  styleUrls: ['./vos-offres.page.scss'],
})
export class VosOffresPage implements OnInit {
  is_loading : boolean = false;
  empty_list : boolean = false;

  error_message : string = '';
  liste_offre : any[] = [];

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
        // offres actifs
        this.liste_offre = response['datas'].map(offre => {
          offre.date_expiration = this.toolServ.formatJSONDate(offre.date_expiration);
          offre.infos = offre.details.map(detail => {
            const type = detail.type_detail;
            // ex : 320 Mo, 200 Ar, 500
            const valeur = this.toolServ.displayProperlyWithUnit(detail.valeur_actuel , type);
            return `${this.makeNice(type)} ${valeur}`;
          }).sort().join(' + ');

          // console.log(offre.infos);

          return offre;
        });
        this.error_message = '';
        // console.log(this.liste_offre);
      } else {
        // console.log(this.liste_offre);
        this.error_message = response['datas'] || 'Erreur requete';
      }
      this.empty_list = this.liste_offre.length == 0;
      this.is_loading = false;
      if (pull_event != null)
        pull_event.target.complete();
    };

    const onError = response => {
      this.is_loading = false;
      this.error_message = 'Erreur interne';
    };

    this.offreServ.getAllOffreActifCurrentUser()
        .subscribe(onSuccess, onError);
  }

}
