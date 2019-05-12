import { Component, OnInit, OnDestroy } from '@angular/core';
import { EmployeesService } from '../../services/employees.service';
import { Subscription, BehaviorSubject } from 'rxjs';
import { switchMap } from 'rxjs/internal/operators/switchMap';

@Component({
    selector: 'web-api',
    templateUrl: 'web-api.component.html'
})

export class WebAPIComponent implements OnInit, OnDestroy {
    employees: Array<any>;
    message: string;
    gae_subscription: Subscription;

    constructor(private eService: EmployeesService) { }

    private readonly refreshToken$ = new BehaviorSubject(undefined);
    private readonly task$ = this.refreshToken$.pipe(
        switchMap(() => this.eService.getAllEmployees()));

    ngOnInit() {
        // this.gae_subscription = this.eService.getAllEmployees().subscribe((resData) => {
        //     this.employees = resData;
        //     this.message = "";
        //     console.log(this.employees);
        // }, (err: string) => {
        //     this.message = err;
        // });

        this.gae_subscription = this.eService.getAllEmployees().subscribe((
            (data) => this.refreshToken$.next(data)));

        this.task$.subscribe((resData) => {
            this.employees = resData;
        });
    }

    setEmployee(emp: any) {
        this.eService.Employee = emp;
    }

    deleteEmployee(emp: any) {
        this.eService.deleteEmployee(emp).subscribe((
            () => this.refreshToken$.next(undefined)));
    }

    ngOnDestroy(): void {
        this.gae_subscription.unsubscribe();
    }
}