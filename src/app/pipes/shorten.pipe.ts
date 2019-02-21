import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorten',
})
export class ShortenPipe implements PipeTransform {
  transform(value: string, maxLength: number): any {
    return value.length <= maxLength
      ? value
      : `${value.slice(0, maxLength)}...`;
  }
}
