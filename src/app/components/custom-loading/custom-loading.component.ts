import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-loading',
  templateUrl: './custom-loading.component.html',
  styleUrls: ['./custom-loading.component.scss'],
})
export class CustomLoadingComponent implements OnInit {

  show_spinner = true;
  show_error = true;
  error_message = 'Une erreur est survenue';

  constructor() { }

  ngOnInit() {}
  
  start () {
	  this.show_spinner = true;
  }
  
  stop () {
	  this.show_spinner = false;
  }
  
  setErrorMessage (message : string) {
	  this.error_message = message;
  }
}
