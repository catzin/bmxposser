import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthService } from '../auth/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate, CanLoad {

  constructor(private auths:AuthService,private router:Router){}
  canActivate(): Observable<boolean> | boolean{

    return this.auths.validarAdmin()
    .pipe(
      tap( valid =>{
        if(!valid){
          this.router.navigateByUrl('/auth');

        }
      })
    )
  }
  canLoad(): Observable<boolean> | boolean{
    return this.auths.validarAdmin()
    .pipe(
      tap(valid =>{
        if(!valid){
          this.router.navigateByUrl('/auth');
        }
      })
    )
  }
}
