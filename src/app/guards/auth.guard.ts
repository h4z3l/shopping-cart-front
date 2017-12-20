import { Router, CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router/src/router_state';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../services/auth.service'; 

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(
        private auth: AuthService,
        private router: Router
    ) {}

    canActivate(): boolean {
        var loggedIn;
        this.auth.currentUser.subscribe(user => {
            if (!user) {
                this.router.navigate(['/login']);
                loggedIn = false;
            } else {
                loggedIn = true;
            }
        });
        return loggedIn;
    }
}