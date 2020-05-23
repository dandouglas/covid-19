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
