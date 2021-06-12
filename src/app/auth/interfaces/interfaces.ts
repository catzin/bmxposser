import { msg } from '../../admin/interfaces/admin.interface';

export interface AuthResponse {
    
    ok: boolean,
    nombre?:string,
    correo?: string,
    token?:string,
    rol?:string,
    msg?:string


}

export interface Usuario {
    nombre :string,
    correo :string
}


export interface errorToken{
    ok:boolean,
    msg:string
}

export interface user {
    nombre:    string;
    appaterno: string;
    email:     string;
    calle:     string;
    numeroExt: string;
    numeroInt: string;
    colonia:   string;
    ciudad:    string;
    estado:    string;
    cp:        number;
}
