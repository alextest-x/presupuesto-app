import { Component, OnInit } from '@angular/core';
import { IngresoServicio } from '../ingreso/ingreso.servicio';
import { EgresoServicio } from '../egreso/egreso.servicio';
import { Ingreso } from '../ingreso/ingreso.model';
import { Egreso } from '../egreso/egreso.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  tipo:string="ingresoOperacion";
  descripcionInput: string;
  valorInput: number;

  constructor(private ingresoServicio: IngresoServicio,
              private egresoServicio: EgresoServicio){
}

  ngOnInit() {
}


  tipoOperacion(evento:any){
    this.tipo= evento.target.value;

  }

  agregarValor(){
    //se compara las dos cadenas en el select
    //de que tipo es este evento
    if(this.tipo === "ingresoOperacion")

    //push inyecta el nuevo registro y se crea un nuevos objeto de tipo ingreso
    //donde pasamos la descripcion y el valor

       this.ingresoServicio.ingresos.push(new Ingreso(this.descripcionInput, this.valorInput));
    else
       this.egresoServicio.egresos.push(new Egreso(this.descripcionInput, this.valorInput ));

  }






}
