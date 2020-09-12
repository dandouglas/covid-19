/*
* Takes a number and converts it to a locale string for readability.
* For example 50000 would return `50,000`
*/
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'localeString'
})
export class LocaleStringPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if (typeof value !== 'number') {
      return value;
    }
    return value.toLocaleString();
  }

}
