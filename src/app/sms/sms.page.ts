import { Component, OnInit } from '@angular/core';
import { SimulationService } from '../services/simulation.service';
import { ToolService } from '../services/tool.service';

@Component({
  selector: 'app-sms',
  templateUrl: './sms.page.html',
  styleUrls: ['./sms.page.scss'],
})
export class SmsPage implements OnInit {
  cible : string = '';
  objet : string = '';
  is_loading : boolean = false;
  message : string = '';
  error_msg : string = '';

  constructor(
    public simulerServ : SimulationService, 
    public toolServ : ToolService
  ) { }

  ngOnInit() {
  }

  doRefresh ($event) {
    $event.target.complete();
  }
  
  envoyer () {
    this.toolServ.presentToast('Veuillez patientez...');
    this.is_loading = true;
    const onSuccess = response => {
      if (response['status'] == 200) {
        let msg = response['datas'] || 'Envoye reussi';
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

    this.simulerServ.simulerSMS(this.objet, this.cible)
        .subscribe(onSuccess, onError);
  }


}
