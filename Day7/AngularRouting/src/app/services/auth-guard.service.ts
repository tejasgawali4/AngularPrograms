import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class AuthGuardService implements CanActivate {
    constructor(private _router: Router,
        private _aService: AuthenticationService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if(this._aService.getToken()){
            return true;
        }

        this._router.navigate(['login'], { queryParams: { returnUrl: state.url } });
        return false;
    }
}