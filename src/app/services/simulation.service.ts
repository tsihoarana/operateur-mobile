import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { base_url } from 'src/environments/environment';
import { ToolService } from './tool.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class SimulationService {

  constructor(private userServ : UserService, private toolServ : ToolService, private http : HttpClient) { }

  simulerSMS(objet : string, destinataire : string){
    const body = {
      "numeroEnvoyeur" : this.userServ.getNumero(),
      "numeroCible" : destinataire,
      "objet" : objet
    };
    const options = this.toolServ.formOption(true);
    return this.http.post(base_url + 'simuler/sms', body, options);
  }

  simulerInternet(valeur : number) {
    const body = {
      "numero" : this.userServ.getNumero(),
      "valeur" : valeur
    };
    const options = this.toolServ.formOption(true);
    return this.http.post(base_url + 'simuler/internet', body, options);
  }

  simulerAutre(type : string, valeur : number) {
    const body = {
      "numero" : this.userServ.getNumero(),
      "valeur" : valeur
    };
    console.log(body, type);
    const options = this.toolServ.formOption(true);
    return this.http.post(base_url + 'simuler/special_mobile/' + type, body, options);
  }
}
