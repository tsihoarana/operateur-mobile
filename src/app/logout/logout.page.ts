import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { ToolService } from '../services/tool.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.page.html',
  styleUrls: ['./logout.page.scss'],
})
export class LogoutPage implements OnInit {

  constructor(public userServ : UserService, public router : Router, public toolServ : ToolService) { }

  ngOnInit() {
  }

  logoutForReal () {
    this.userServ.logout();
    this.router.navigate(['/login']);
    this.toolServ.presentToast('Deconnexion reussie !');
  }
}
