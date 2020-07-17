import { Component, OnInit, Input } from '@angular/core';
import { Viaje, ViajeEstado } from '../models/viaje';

@Component({
  selector: 'app-viaje-ngform',
  templateUrl: './viaje-ngform.component.html',
  styleUrls: ['./viaje-ngform.component.scss']
})
export class ViajeNgformComponent implements OnInit {

  @Input() viaje: Viaje = new Viaje();
  tiposDeViajes: string[] = ['Crucero', 'Buceo', 'Todo incluido'];
  // estados: string[] = [];
  viajeEstado = ViajeEstado;


  constructor() {
    this.viaje.nombreDelViaje = 'Crucero por las islas Griegas';
    this.viaje.tipoDelViaje = 'Crucero';
    this.viaje.duracion = 12;
    this.viaje.destino = 'Grecia';
    this.viaje.plazas = 4;
    this.viaje.visible = false;
    this.viaje.estado = ViajeEstado.Cerrado;

    // for(let i = 1; i < 5; i++){
    //   this.estados.push(ViajeEstado[i]);
    // }
    // this.estados.push(ViajeEstado[1]);
    // this.estados.push(ViajeEstado[2]);
    // this.estados.push(ViajeEstado[3]);
    // this.estados.push(ViajeEstado[4]);
  }

  ngOnInit(): void {
  }

  guardar(): void {
    console.table(this.viaje);
  }

}
