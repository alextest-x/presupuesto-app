import { Component } from '@angular/core';
import { EgresoServicio } from './egreso/egreso.servicio';
import { IngresoServicio } from './ingreso/ingreso.servicio';
import { Ingreso } from './ingreso/ingreso.model';
import { Egreso } from './egreso/egreso.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

ingresos:Ingreso[]=[];
egresos: Egreso[]=[];


//inyectamos los servicio en esta clase para poder usar los arreglos
constructor(private ingresoServicio: IngresoServicio,
            private egresoServicio: EgresoServicio){

 //inicializando los atributos de la clase
              this.ingresos= ingresoServicio.ingresos;
              this.egresos = egresoServicio.egresos;

            }

  getIngresoTotal(){
   let ingresoTotal: number=0;
   this.ingresos.forEach(ingreso => {
    //ingresoTotal = ingresoTotal +ingreso.valor;
   ingresoTotal += ingreso.valor;
   }
   );
   return ingresoTotal;
  }


  getEgresoTotal(){
    let egresoTotal: number=0;
    this.egresos.forEach(egreso =>{
      egresoTotal += egreso.valor;
    }
    );
    return egresoTotal;
  }


  getPorcentajeTotal(){
    return this.getEgresoTotal() / this.getIngresoTotal();
  }

  getPresupuestoTotal(){
    return this.getIngresoTotal() - this.getEgresoTotal();
  }


}




