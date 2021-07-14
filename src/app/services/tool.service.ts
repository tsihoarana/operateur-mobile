import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

import { user_fields } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ToolService {
  constructor(private router : Router, private toastController : ToastController) { }

  /**
   * Construit un objet option header pouvant contenir ou non un token
   * @param use_authorization utiliser le token ou non
   */
  formOption (use_authorization : boolean = false) {
    const options = { 
      headers: {
        'Content-Type' : 'application/json'
      }
    };
    
    if (use_authorization) {
      options['headers']['Authorization'] = 'Bearer ' + this.getToken();
    }

    return options;
  }

  /**
   * Initialise les donnees utiles pendant tout le cycle de vie de l'appli
   * en stockant les infos utiles dans localStorage
   * @params data {token_value : ..., nom : ..., prenom : ..., numero : ..., idclient : ..., date_naissance : ....}
   */
  setUser (data : any) {
    user_fields.forEach ((key : string) => {
      localStorage.setItem(key, data[key]);
    });
  }

  /**
   * Redirige dans la page login si token non existant
   */
  redirectIfNotLogged () {
    if (!this.isLogged()) {
      this.router.navigate(['/login']);
    }
  }

  /**
   * Redirige dans l'accueil si deja connecte
   */
  redirectToHomeIfConnected () {
    if (this.isLogged()) {
      this.router.navigate(['/accueil']);
    }
  }

  /**
   * Recupere le token courant, retourne une chaine vide si non existant
   */
  getToken () {
    return localStorage.getItem('token_value') || '';
  }

  /**
   * Permet de savoir si l'utilisateur est connecte
   */
  isLogged () {
    return this.getToken() != '';
  }

  /**
   * Renvoie les donnees utilisateurs provenant de localStorage
   * @returns {JSON} {token_value : ..., nom : ..., prenom : ..., numero : ..., idclient : ..., date_naissance : ....}
   */
  getUserData (some_key = null) {
    const user_data = {};
    user_fields.forEach((key : string) => {
      user_data[key] = localStorage.getItem(key);
    });
    return user_data;
  }

  /**
   * Recupere une cle en particulier
   * @param key 
   */
  getUserDataByKey (key : string) {
    return this.getUserData() [ key ];
  }
  
  /**
   * Ajoute un 0-prefixe si le nombre est inferieur a 10
   * @param n
   */
	addZero( n ) {
		return n < 10 ? '0' + n : n;
	}

  /**
   * Converti un objet de type date sous format timestamp
   * @param date 
   */
  toTimestamp( date : Date ) {
		let [year, month, days, hour, min, sec] = [
			date.getFullYear(), date.getMonth() + 1, date.getDate(),
			date.getHours(), date.getMinutes(), date.getSeconds()
		].map( x => this.addZero(x) ); // on ajoute un zero si un item < 10 (genre 1:3:33 => 01:03:33)
		
		return `${year}-${month}-${days} ${hour}:${min}:${sec}`;
  }
  
  /**
   * Formate une date en chaine formatee ISO en string lisible
   * @param json_date
   */
  formatJSONDate (json_date : string) {
    return new Date(json_date).toLocaleString();
  }

  /**
   * Formate les minutes decimales en texte lisible
   * Exemple : 3.5 min = 3min 5
   * @param numero 
   */
  formatMinute (minute_decimal : number) {
    let str = '';
    const hh = Math.floor(minute_decimal / 60);
    str += hh + ' h ';
    
    minute_decimal -= 60 * hh;
    if (minute_decimal == 0)
      return str;
    const mm = Math.floor(minute_decimal);
    str += mm + ' min ';
    minute_decimal -= mm;
    if (minute_decimal == 0)
      return str;
    return str + Math.floor(minute_decimal * 60) + ' s';
  }

  formatMoney(num_str:  number) {
    let money : string = num_str + ''; // cast like a pro
    // num & dec part
		let [n, dec] = money.split('.');
		let res = '';
		for (let i = n.length - 1, k = 0; i >= 0; i--, k++) {
      res = n.substring(i, i + 1) + res;
      if ((k + 1) % 3 == 0 && i != 0)
        res = ' ' + res;
		}
		return res + (dec ? '.' + dec : '') ;
  }

  formatNumero(numero: string) {
    numero.match(/([0-9]{3})([0-9]{2})([0-9]{3})([0-9]+)/i);
    return [1, 2, 3, 4].map(x => {
      return RegExp['$' + x];
    }).join(' ');
  }

  /**
   * @param categ peut etre INTERNET, SMS, APPEL ou SPECIAL_MOBILE
   */
  formatNumUsingAppropriateUnit (categ : string) {
    const map_unit = {
      'INTERNET' : 'Mo',
      'APPEL_INTERNE' : 'Min',
      'APPEL_EXTERNE' : 'Min',
      'SMS' : '',

      'DEFAULT' : 'Mo'
    };

    return map_unit[categ] || map_unit['DEFAULT'];
  }

  /**
   * Ex : f (20, INTERNET) => 20 Mo
   * @param value 
   * @param categ 
   */
  displayProperlyWithUnit (value : number, categ : string) {
    if (value < 0)
      return 'ILLIMITE';
    return value + ' ' + this.formatNumUsingAppropriateUnit(categ);
  }

  /**
   * Exemple FOO_BAR => Foo Bar
   */
  formatNicely (text : string) {
    let parts = text.split(/[ _]+/g);
    const majFirst = (x : string) => {
      return x.substring(0, 1).toUpperCase() + x.toLowerCase().substr(1);
    };

    return parts.map(majFirst)
                .join(' ');
  }

  /**
   * Affiche un message d'alerte
   */
  async presentToast(message : string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 3000
    });
    toast.present();
  }
}