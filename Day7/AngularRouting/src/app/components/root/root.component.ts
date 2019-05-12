import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../../services/employees.service';

@Component({
    selector: 'root',
    templateUrl: 'root.component.html',
    providers: [EmployeesService]
})

export class RootComponent implements OnInit {
    constructor() { }

    ngOnInit() {
    }
}