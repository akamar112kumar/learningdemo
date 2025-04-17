import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstLetterCaptital',
  standalone: true
})
export class FirstLetterCaptitalPipe implements PipeTransform {

  transform(value: string): string {
    if (!value) return value;
    return value.replace(/\b\w/g, first => first.toLocaleUpperCase());
  }

}
