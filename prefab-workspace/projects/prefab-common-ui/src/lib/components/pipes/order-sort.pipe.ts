import { Pipe, PipeTransform } from "@angular/core";
import { orderBy,sortBy } from 'lodash';

@Pipe({
  name: "sortByOrder",
  // pure: false, 
  standalone: true,
})
export class OrderSortPipe implements PipeTransform {
  
  transform(value: any[] | null, order: any = "asc", column: string = "id"): any[] | null {
    if (!value || order === '' || !order) { 
      return value; 
    }
    if (!column || column === '') { 
      return (order==='asc')
      ? value.sort()
      : value.sort().reverse();
    }
    if (value.length <= 1) { 
      return value; 
    }
    return orderBy(value, [column], [order]);
  }
}