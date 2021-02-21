import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  public transform(value: any, keys: string, term: string) {
    if (!term) {
      return value;
    }
    // }else if(term.length==0){
    //   return value;
    // }
    return (value.slice(0,5) || []).filter((item:any) => keys.split(',').some(key => item.hasOwnProperty(key) && new RegExp(term, 'gi').test(item[key])));
  }

}