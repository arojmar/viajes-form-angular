export enum ViajeEstado {
    AbiertoHastaElAmanecer = 1,
    Cerrado = 2,
    Cancelado = 3,
    Postpuesto = 4
}

export class Viaje {
    nombreDelViaje: string; // input
    tipoDelViaje: string; // select
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