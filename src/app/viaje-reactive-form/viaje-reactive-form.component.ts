import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Viaje } from '../models/viaje';
import { IdValue } from '../models/id-value';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-viaje-reactive-form',
  templateUrl: './viaje-reactive-form.component.html',
  styleUrls: ['./viaje-reactive-form.component.scss']
})
export class ViajeReactiveFormComponent implements OnInit {

  @Input() viaje: Viaje = new Viaje();
  @Input() tiposViajes: IdValue[]= [];
  @Input() estados: IdValue[] = [];
  @Output() viajeChanged = new EventEmitter<Viaje>(false);

  elFormulario: FormGroup;

  constructor(fb: FormBuilder) {

    this.elFormulario = fb.group({
      nombreDelViaje: ['', Validators.required], 
      tipoDelViaje: [''], 
      duracion:  [0], 
      destino: [''], 
      plazas:[0], 
      visible:[true], 
      estado: [''] 
    });
  }

  ngOnInit(): void {
  }

  guardar(formValue: any): void {
   this.viajeChanged.emit(formValue);
  }

}