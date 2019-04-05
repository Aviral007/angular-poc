import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from 
'@angular/router';
import { Observable } from 'rxjs';

import {Router} from '@angular/router';
@Injectable()
export class AuthPrivateGuard implements CanActivate {
  constructor(private router:Router){
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if(localStorage.getItem('user_id')!=null){
     return true;

     }
    else
    {
      alert("Please Login First");
      this.router.navigate(['/login']);
      return false;
    }
  }
}

