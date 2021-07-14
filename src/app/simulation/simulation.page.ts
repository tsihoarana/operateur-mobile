import { Component, OnInit } from '@angular/core';
import { OffreService } from '../services/offre.service';
import { SimulationService } from '../services/simulation.service';
import { ToolService } from '../services/tool.service';

@Component({
  selector: 'app-simulation',
  templateUrl: './simulation.page.html',
  styleUrls: ['./simulation.page.scss'],
})
export class SimulationPage implements OnInit {
  error_msg : string = '';
  type : string = '';
  valeur : number = 0;

  is_loading : boolean = false;
  message : string = '';
  list_offre : [];
  offre : string = '';

  constructor(
    public toolServ : ToolService,
    public simulationServ : SimulationService,
    public offreServ : OffreService
  ) { }

  ngOnInit() {
    this.toolServ.redirectIfNotLogged();
    this.getOffreSpecial();
  }

  doRefresh ($event) {
    $event.target.complete();
  }

  getOffreSpecial () {
    const onSuccess = response => {
      if (response['status'] == 200) {
        this.list_offre = response['datas'];
      } else {
        let msg = response['datas'] || 'Erreur connexion';
        this.toolServ.presentToast(msg);
      }
      this.message = '';
    };

    const onError = response => {
      this.message = '';
      this.toolServ.presentToast('Erreur interne');
    };

    this.offreServ.getOffreSpecial()
        .subscribe(onSuccess, onError);
  }

  simuler () {
    this.toolServ.presentToast('Veuillez patientez...');
    this.is_loading = true;
    const onSuccess = response => {
      if (response['status'] == 200) {
        let msg = response['datas'] || 'reussi';
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

    this.simulationServ.simulerAutre(this.type, this.valeur)
        .subscribe(onSuccess, onError);
  }

}
