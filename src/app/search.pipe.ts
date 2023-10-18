import { Pipe, PipeTransform } from '@angular/core';
import { Movieface } from './interface/movieface';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(data: Movieface[] | undefined, term: string): Movieface[] {
    if (!data) {
      return [];
    }

    return data.filter(ele => ele.title.toLowerCase().includes(term.toLowerCase()));
  }
}
