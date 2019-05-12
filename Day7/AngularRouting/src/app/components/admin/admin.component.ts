import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { UsersService } from '../../services/users.service';
import { Subscription } from 'rxjs';

@Component({
    templateUrl: 'admin.component.html',
    providers: [UsersService]
})

export class AdminComponent implements OnInit, OnDestroy {
    users: Array<any>;
    message: string;
    gu_subscription: Subscription;

    constructor(private _aService: AuthenticationService,
        private _uService: UsersService) { }

    ngOnInit() {
        this.gu_subscription = this._uService.getAllUsers().subscribe((resData) => {
            this.users = resData.users;
            this.message = "";
        }, (err: string) => {
            this.message = err;
        });
    }

    ngOnDestroy(): void {
        this._aService.logout();
        this.gu_subscription.unsubscribe();
    }
}