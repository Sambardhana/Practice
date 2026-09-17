

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'kebabCase',
  standalone: true
})
export class KebabCasePipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return '';
    return value
      .toLowerCase()
      .trim()
      .replace(/\s+/g, '-');
  }
}