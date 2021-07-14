import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { ToolService } from './tool.service';
import { HttpClient } from '@angular/common/http';
import { base_url } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppelService {

  constructor(private userServ : UserService, private toolServ : ToolService, private http : HttpClient) { }

  /**
   * Prend tous les appels concernant ce numero
   */
  getAllAppel () {
    const options = this.toolServ.formOption(true);
    const numero = this.userServ.getNumero();
    return this.http.get(base_url + 'appel/' + numero, options);
  }

  /**
   * Simule un appel en fonction du numero cible et de la duree
   * @param numero_cible 
   * @param duree_minute 
   */
  effectuerAppel (numero_cible : string, duree_minute : number) {
    const body = {
      "numeroAppelant" : this.userServ.getNumero(),
      "numeroCible" : numero_cible,
      "duree" : duree_minute
    };
    const options = this.toolServ.formOption(true);
    return this.http.post(base_url + 'appel/simuler', body, options);
  }

}
