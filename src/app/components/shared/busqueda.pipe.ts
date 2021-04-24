import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'busqueda',
})
export class BusquedaPipe implements PipeTransform {
  transform(value: any, arg: any): any {
    const resultadofilter = [];
    for (const dato of value) {
      if (dato.nombre.toUpperCase().indexOf(arg.toUpperCase() > -1)) {
        resultadofilter.push(dato);
      }
    }
    return resultadofilter;
  }
}
