import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cutter',
})
export class CutterPipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    if (value && typeof value === 'string') {
      return value.slice(0, value.lastIndexOf('.'));
    }
    if (value && typeof value === 'number') {
      if (args[0] === 'up') {
        return Math.round(value);
      } else {
        return Math.floor(value);
      }
    }
  }
}
