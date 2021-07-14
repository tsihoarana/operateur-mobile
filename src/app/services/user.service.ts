import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToolService } from './tool.service';
import { base_url } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http : HttpClient, public toolServ : ToolService) { }

  /**
   * Connection
   */
  connect (numero : string, password : string) {
    const options = this.toolServ.formOption();
    let body = {
      'numero' : numero,
      'password' : password
    };
    return this.http.post(base_url + 'client/connexion', body, options);
  }

  getClientStatus (idclient : string) {
    const options = this.toolServ.formOption( true );
    return this.http.get(base_url + 'client/status/' + idclient, options);
  }

  getUserFullName () {
    const [first, sec] = [
      this.toolServ.getUserDataByKey('nom') || '',
      this.toolServ.getUserDataByKey('prenom') || ''
    ];
    return first + ' ' + sec;
  }

  getNumero () {
    return this.toolServ.getUserDataByKey('numero');
  }

  getId () {
    return this.toolServ.getUserDataByKey('idclient');
  }

  logout () {
    localStorage.clear();
  }

  inscription (info) {
    const options = this.toolServ.formOption();
    return this.http.post(base_url + 'client/inscription', info, options);
  }
}
