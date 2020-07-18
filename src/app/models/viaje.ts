export enum ViajeEstado {
    AbiertoHastaElAmanecer = 1,
    Cerrado = 2,
    Cancelado = 3,
    Postpuesto = 4
}

export enum TipoDeViaje {
    Crucero = 1,
    Buceo = 2,
    TodoIncluido = 3
}

export class Viaje {
    id: number;
    nombreDelViaje: string; // input
    tipoDelViaje: TipoDeViaje; // select
    duracion: number; // input
    destino: string; // input
    plazas?: number; // input
    visible: boolean; // select || check
    estado: ViajeEstado; // select

constructor(item?: any) {
    this.nombreDelViaje = item?.nombreDelViaje || '';
    this.tipoDelViaje = item?.tipoDelViaje || '';
    this.duracion = item?.duracion || 0;
    this.destino = item?.destino || '';
    this.plazas = item?.plazas || 0;
    this.visible = item && item.visible != null ? item.visible : true;
    this.estado = item?.estado || ViajeEstado.AbiertoHastaElAmanecer;
}

}