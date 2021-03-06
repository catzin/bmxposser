export interface Producto {
    idproducto: number;
    nombre:     string;
    precio:     number;
    marca:      string;
    img:        string;
    cantidad: number;
}


export interface Categoria {
    idcategoria: number;
    categoria:   string;
    img:         string;
}

export interface msgAdd{
    ok:boolean;
    band?:number;
    msg:string;
    
}

export interface VerProducto {
    idproducto:  number;
    nombre:      string;
    descripcion: string;
    precio:      number;
    marca:       string;
    categoria:   string;
    cantidad:    number;
}


export interface imgsResponse{
    path: string;
}
