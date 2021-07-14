import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToolService } from './tool.service';
import { UserService } from './user.service';
import { base_url } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CreditService {

  constructor(
    private userServ : UserService,
    private toolServ : ToolService,
    private http : HttpClient
  ) { }

  acheter (montant : number) {
    const body = {
        "idclient" : this.userServ.getId(),
        "montant" : montant
    };
    const options = this.toolServ.formOption(true);
    return this.http.post(base_url + 'credit/action/depot', body, options);  
  }

}
