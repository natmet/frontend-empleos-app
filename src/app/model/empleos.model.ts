import { Moment } from 'moment';

export interface IEmpleo {
    id?: number;
    posicion?: string;
    fechaPublicado?: Moment;
    compania?: string;
    descripcion?: string;
    salario?: number;
    ubicacion?: string;
}

export class Empleo implements IEmpleo{

    constructor(
        public id?: number,
        public posicion?: string,
        public fechaPublicado?: Moment,
        public compania?: string,
        public descripcion?: string,
        public salario?: number,
        public ubicacion?: string

    ) { }
}