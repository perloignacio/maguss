export class Equipos{
    id:number;
    tipo_id: number;
    servicio_id: number;
    establecimiento_id: number;
    marca: string;
    modelo: string;
    serie: string;
    codigo_interno:string;
    proveedor:string;
    propiedad: string;
    contrato_mantenimiento:  string;
    mantenimiento_fecha? :  Date;
    mantenimiento_alarma_id? :  number;
    vencimiento :  string;
    estado:  string;
    creado_fecha: Date;
    creado_usuario:  number;
    modificado_fecha?: Date;
    modificado_usuario: number;
    activo: string;
    nombreServicio:string;
   
}