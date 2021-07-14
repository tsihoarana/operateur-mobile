import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { ToolService } from './tool.service';
import { HttpClient } from '@angular/common/http';
import { base_url } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MvolaService {

  constructor(private userServ : UserService, private toolServ : ToolService, private http : HttpClient) { }

  deposer (montant : number) {
    const body = {
        "idclient" : this.userServ.getId(),
        "montant" : montant
    };
    const options = this.toolServ.formOption(true);
    return this.http.post(base_url + 'mvola/action/depot', body, options);  
  }
}
