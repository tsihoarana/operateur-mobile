import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { ToolService } from './tool.service';
import { HttpClient } from '@angular/common/http';
import { base_url } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OffreService {

  constructor(private userServ : UserService, private toolServ : ToolService, private http : HttpClient) { }

  /**
   * Recupere tous les offres de l'operateur
   */
  getAllOffre () {
    const options = this.toolServ.formOption(true);
    return this.http.get(base_url + 'offre', options);    
  }

  /**
   * Recupere tous les offres actifs de l'utilisateur courant
   */
  getAllOffreActifCurrentUser () {
    const numero  = this.userServ.getNumero();
    const options = this.toolServ.formOption(true);
    return this.http.get(base_url + 'offre/client/' + numero, options);     
  }

  /**
   * Achete une offre pour l'utilisateur courant en fonction de l'idoffre
   * @param idoffre
   */
  acheterOffre (idoffre : string) {
    const body = {
        "idoffre" : idoffre,
        "idclient" : this.userServ.getId(),
        "date_achat" : this.toolServ.toTimestamp(new Date())
    };
    const options = this.toolServ.formOption(true);
    return this.http.post(base_url + 'offre/client/achat', body, options);     
  }

  /**
   * Retourne tous les types d'offres avec les durees par defaut si existant
   */
  getAllTypesOffre () {
    const options = this.toolServ.formOption(true);
    return this.http.get(base_url + 'offre/types', options);     
  }

  /**
   * Retourne tous les types details (INTERNET, SMS, APPEL, ...)
   */
  getAllTypesDetailOffre () {
    const options = this.toolServ.formOption(true);
    return this.http.get(base_url + 'offre/type_details', options);     
  }

  /**
   * Retourne tous les offres associees avec l'idtypeoffre
   */
  getOffreByIdtype (idtypeoffre : string) {
    const options = this.toolServ.formOption(true);
    return this.http.get(base_url + 'offre/byidtype/' + idtypeoffre, options);     
  }

  /**
   * Retourne tous les offres special
   */
  getOffreSpecial () {
    const options = this.toolServ.formOption(true);
    return this.http.get(base_url + 'offre/special_mobile', options);     
  }
}
