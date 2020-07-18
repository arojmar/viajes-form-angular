import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Viaje, ViajeEstado } from '../models/viaje';
import { IdValue } from '../models/id-value';

@Component({
  selector: 'app-viaje-ngform',
  templateUrl: './viaje-ngform.component.html',
  styleUrls: ['./viaje-ngform.component.scss']
})
export class ViajeNgformComponent implements OnInit {

  @Input() viaje: Viaje = new Viaje();
  @Input() tiposViajes: IdValue[]= [];
  // OPCION 1
  // status: string[] = [];
  // OPCION 3
  //  viajeEstado = ViajeEstado;

  // OPCION 4 
  @Input() estados: IdValue[] = [];
  @Output() viajeChanged = new EventEmitter<Viaje>(false);

  constructor() {
    // this.viaje.nombreDelViaje = 'Crucero por las islas Griegas';
    // this.viaje.tipoDelViaje = 'Crucero';
    // this.viaje.duracion = 12;
    // this.viaje.destino = 'Grecia';
    // this.viaje.plazas = 4;
    // this.viaje.visible = false;
    // this.viaje.estado = ViajeEstado.Cerrado;

    // OPCION 1
    // for(let i = 1; i < 5; i++){
    //   this.status.push(ViajeEstado[i]);
    // }
    // this.status.push(ViajeEstado[1]);
    // this.status.push(ViajeEstado[2]);
    // this.status.push(ViajeEstado[3]);
    // this.status.push(ViajeEstado[4]);

    // OPCION 4 
    //this.estados = this.cargarEstados();
  }

  ngOnInit(): void {
  }

  guardar(): void {
  //  console.table(this.viaje);
   this.viajeChanged.emit(this.viaje);
  }
  // OPCION 4
  // cargarEstados(): IdValue[]{
  //   const result: IdValue[] = [];

  //   result.push({ 
  //     id: this.viajeEstado.AbiertoHastaElAmanecer, 
  //     value: 'Abierto hasta el amanecer'
  //   });

  //   result.push({ 
  //     id: this.viajeEstado.Cancelado, 
  //     value: 'Cancelado por inclemencias'
  //   });

  //   result.push({
  //     id: this.viajeEstado.Cerrado, 
  //     value: 'Completado el aforo'
  //   });

  //   result.push({
  //     id: this.viajeEstado.Postpuesto,
  //     value: 'Postpuesto hasta nuevo aviso'
  //   });

  //   return result;
  // }
}
