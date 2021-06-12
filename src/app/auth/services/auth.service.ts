import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map,tap} from 'rxjs/operators';
import { of, Observable } from 'rxjs';
import { environment } from '../../../environments/environment.prod';
import { AuthResponse, Usuario, user } from '../interfaces/interfaces';
import { msg } from '../../admin/interfaces/admin.interface';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = environment.baseUrl;
  private _usuario!: Usuario;
  

  constructor(private http:HttpClient){}

  get Usuario(){
    return {...this._usuario};

  }
   
  login(email:string,pass:string){
    const url = `${this.baseUrl}auth/login`;
    const body = {email,pass};
    return this.http.post<AuthResponse>(url,body)
    .pipe(
      tap(resp => {
        if(resp.ok){
          localStorage.setItem('token',resp.token!);
          this._usuario = {
            nombre:resp.nombre!,
            correo:resp.correo!
          }
        }
      }),

      map(resp => resp),
      catchError(err => of(err.error))
    )

  }

  registrar(nombre:string,appaterno:string,apmaterno:string,email:string,telefono:string,password:string){

    const url = `${this.baseUrl}auth/registrar`;
    const body = {nombre,appaterno,apmaterno,email,telefono,password};

    return this.http.post<AuthResponse>(url,body)
    .pipe(
     
      map(resp => resp),
      catchError(err => of(err.error))
    )



  }


  cerrarSesion(){
    localStorage.removeItem('token');
  }


  getToken(){
    return !!localStorage.getItem('token');
  }


  validarToken():Observable<AuthResponse>{

    const url = `${this.baseUrl}auth/renovar`;
    const headers = new HttpHeaders()
    .set('token',localStorage.getItem('token') || ' ');

    return this.http.get<AuthResponse>(url,{headers});

  }

   validarTokenGuard(): Observable<boolean>{

    const url = `${this.baseUrl}auth/renovar`;
    const headers = new HttpHeaders()
    .set('token',localStorage.getItem('token')||'');

    return this.http.get<AuthResponse>(url,{headers})
      .pipe(
        map(resp =>{

          return resp.ok;
        }),
        catchError(err => of(false))
      )
   

  }

  validarAdmin():Observable<boolean>{
    const url = `${this.baseUrl}auth/validarAdmin`;
    const headers = new HttpHeaders()
    .set('token',localStorage.getItem('token')||'');

    return this.http.get<AuthResponse>(url,{headers})
    .pipe(
      map(resp =>{
        return resp.ok
      }),
      catchError(err => of(false))

    )
  }


  registrarDireccion(calle:string,numi:string,nume:string,colonia:string,ciudad:string,estado:string,cod:number):Observable<msg>{
   
    const url = `${this.baseUrl}auth/registrarDireccion`;
    const body = {calle,nume,numi,colonia,ciudad,estado,cod};
    const headers = new HttpHeaders()
    .set('token',localStorage.getItem('token')||'');

    return this.http.post<msg>(url,body,{headers});


  }


  getInfoUsuario():Observable<user[]>{

     const url = `${this.baseUrl}auth/getInfoUsuario`;
     const headers = new HttpHeaders()
     .set('token',localStorage.getItem('token')||'');

     return this.http.get<user[]>(url,{headers});

  }

}
