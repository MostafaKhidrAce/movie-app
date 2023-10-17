import { Pipe, PipeTransform } from '@angular/core';
import { Movieface } from './interface/movieface';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(data:Movieface[],term:string): Movieface[] {
    return data.filter(ele=>ele.title.toLowerCase().includes(term.toLowerCase()));
  }

}
