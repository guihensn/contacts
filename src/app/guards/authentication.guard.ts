import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const token = localStorage.getItem('token');
    const expirationDate = localStorage.getItem('expirationDate');

    if (!token || !expirationDate) {
      this.router.navigate(['/login']); // Redirect to login if not authenticated
      return false;
    }

    const expiration = new Date(expirationDate);

    if (expiration < new Date()) {
      this.router.navigate(['/login']); // Redirect to login if token is expired
      return false;
    }

    return true;
  }
}