import { Component, OnInit } from '@angular/core';
import { IdValue } from './models/id-value';
import { ViajeEstado, TipoDeViaje, Viaje } from './models/viaje';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  estados: IdValue[] = [];
  tiposDeViajes: IdValue[] = [];
  viaje: Viaje;

  constructor() {
    this.estados = this.cargarEstados();
    this.tiposDeViajes = this.cargarTiposDeViaje();
  }

  ngOnInit(){
    this.viaje = this.cargarViaje(7);
  }

  cargarTiposDeViaje(): IdValue[]{
    const result: IdValue[] = [];

    result.push({ 
      id: TipoDeViaje.Crucero,
      value: 'Crucero 5 estrellas'
    });

    result.push({
      id: TipoDeViaje.Buceo,
      value: 'Vida a bordo con buceo'
    });

    result.push({
      id: TipoDeViaje.TodoIncluido,
      value: 'Regimen de todo incluido'
    });

    return result;
  }

  cargarEstados(): IdValue[]{
    const result: IdValue[] = [];

    result.push({ 
      id: ViajeEstado.AbiertoHastaElAmanecer, 
      value: 'Abierto hasta el amanecer'
    });

    result.push({ 
      id: ViajeEstado.Cancelado, 
      value: 'Cancelado por inclemencias'
    });

    result.push({
      id: ViajeEstado.Cerrado, 
      value: 'Completado el aforo'
    });

    result.push({
      id: ViajeEstado.Postpuesto,
      value: 'Postpuesto hasta nuevo aviso'
    });

    return result;
  }

  private cargarViaje(id?: number): Viaje {
    // Simula la llamada a la base de datos y pide el id 7
    const viaje = new Viaje({ 
      id: 7,
      nombreDelViaje: 'Crucero por las islas Griegas',
      tipoDelViaje: TipoDeViaje.Crucero,
      duracion: 12,
      destino: 'Grecia',
      plazas: 4,
      visible: false,
      estado: ViajeEstado.Cerrado
    });

    return viaje;
  }

  guardar(v: Viaje): void{
    // console.table(v);
    this.guardarViaje(v);
  }

  private guardarViaje(viaje: Viaje): Viaje {
    // llamaria a una API y guardaria el objeto despues de haberlo guardado
    return viaje;
  }
}
