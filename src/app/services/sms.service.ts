import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToolService } from './tool.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class SmsService {

  constructor(
    private userServ : UserService,
    private toolServ : ToolService,
    private http : HttpClient
  ) { }
}
