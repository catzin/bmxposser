
export interface AuthResponse {
    
    ok: boolean,
    nombre?:string,
    correo?: string,
    token?:string,
    rol:string

}

export interface Usuario {
    nombre :string,
    correo :string
}


export interface errorToken{
    ok:boolean,
    msg:string
}