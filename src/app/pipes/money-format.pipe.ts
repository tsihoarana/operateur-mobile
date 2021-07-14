import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'moneyFormat'
})
export class MoneyFormatPipe implements PipeTransform {

  transform(num_str: string | number, ...args: unknown[]): unknown {
    let money : string = num_str + ''; // cast like a pro
    // num & dec part
		let [n, dec] = money.split('.');
		let res = '';
		for (let i = n.length - 1, k = 0; i >= 0; i--, k++) {
      res = n.substring(i, i + 1) + res;
      if ((k + 1) % 3 == 0 && i != 0)
        res = ' ' + res;
		}
		return res + (dec ? '.' + dec : '') + ' Ar';
  }

}
