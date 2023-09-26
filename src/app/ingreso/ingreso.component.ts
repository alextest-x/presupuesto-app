import { Component, OnInit } from '@angular/core';
import { IngresoServicio } from './ingreso.servicio';
import { Ingreso } from './ingreso.model';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css']
})
export class IngresoComponent implements OnInit {

  ingresos:Ingreso[]=[];

  constructor(private ingresoServicio: IngresoServicio){}


  ngOnInit(): void {
    this.ingresos = this.ingresoServicio.ingresos
  }

  eliminarRegistro(ingreso: Ingreso){
    return this.ingresoServicio.eliminar(ingreso);

  }

  calcularPorcentaje(ingreso: Ingreso){
    // return ingreso.valor / this.ingreso;
    return ingreso.valor;
  }


}
