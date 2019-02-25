import { Pipe, PipeTransform } from '@angular/core';
import { DEFAULT_IMAGE } from '../data/constants';

@Pipe({
  name: 'defaultImage',
})
export class DefaultImagePipe implements PipeTransform {
  transform(value: any): any {
    return value ? value : DEFAULT_IMAGE;
  }
}
