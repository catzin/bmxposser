import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/services/auth.service';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ValidartokenGuard implements CanActivate, CanLoad {

  constructor(private authservice:AuthService,private router:Router){}
  canActivate(): Observable<boolean> | boolean{
    //console.log('can activate');
    return this.authservice.validarTokenGuard()
    .pipe(
      tap(valid =>{
        if(!valid){
          this.router.navigateByUrl('/auth');
        }
      })
    )
  }
  canLoad(): Observable<boolean> | boolean{
    //console.log('can Load');
    return this.authservice.validarTokenGuard()
    .pipe(
      tap(valid =>{
        if(!valid){
          this.router.navigateByUrl('/auth');
        }
      })
    )
  }
}
