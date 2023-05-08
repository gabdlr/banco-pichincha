import { Pipe, PipeTransform } from '@angular/core';
import { ProductoFinanciero } from '../models/ProductoFinanciero';
import { ListadoProductosFinancierosService } from '../services/listado-productos-financieros.service';

@Pipe({
  name: 'searchListadoProductosFinancieros',
  standalone: true,
})
export class SearchListadoProductosFinancierosPipe implements PipeTransform {
  constructor(
    private listadoProductosFinancierosService: ListadoProductosFinancierosService
  ) {}
  transform(
    value: ProductoFinanciero[] | null,
    search: string | null
  ): ProductoFinanciero[] {
    if (!search) {
      this.listadoProductosFinancierosService.setCurrentResultLength(
        value?.length ?? 0
      );
      return value ?? [];
    }
    const filteredArray = [];
    if (value && search) {
      for (let i = 0; i < value.length; i++) {
        const rowStrings: (string | Date)[] = Object.values(value[i]);
        for (let j = 0; j < rowStrings.length; j++) {
          if (rowStrings[j] instanceof Date) {
            const dateISO = (rowStrings[j] = (<Date>(
              rowStrings[j]
            )).toISOString());
            const year = dateISO.substring(2, 4);
            let month = dateISO.substring(5, 7);
            if (Number(month) < 10) {
              month = month.substring(1);
            }
            let day = dateISO.substring(8, 10);
            if (Number(day) < 10) {
              day = day.substring(1);
            }
            rowStrings[j] = `${day}/${month}/${year}`;
          }
          if (
            (<string>rowStrings[j]).toLowerCase().includes(search.toLowerCase())
          ) {
            filteredArray.push(value[i]);
            break;
          }
        }
      }
    }
    this.listadoProductosFinancierosService.setCurrentResultLength(
      filteredArray.length
    );
    return filteredArray;
  }
}
