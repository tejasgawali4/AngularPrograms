import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EmployeesService } from '../../services/employees.service';

@Component({
    selector: 'manage-employee',
    templateUrl: 'manage-employee.component.html'
})

export class ManageEmployeeComponent implements OnInit {
    employeeForm: FormGroup;
    rSub: Subscription;
    title: string;

    constructor(private frmBuilder: FormBuilder, private _route: ActivatedRoute,
        private eService: EmployeesService, private _router: Router) { }

    ngOnInit() {
        this.employeeForm = this.frmBuilder.group({
            Id: [0],
            Name: ["", Validators.required],
            EmailId: ["", [Validators.required, Validators.email]],
            Mobile: ["", Validators.required],
            Address: ["", Validators.required],
            IsActive: [false]
        });

        this.rSub = this._route.params.pipe(map(p => p['id'])).subscribe((id) => {
            this.title = !id && "Create Employee" || "Edit Employee";
            if (id) {
                var emp = this.eService.Employee;
                console.log(emp);
                this.employeeForm.patchValue(emp);
            }
        });
    }

    get frm() { return this.employeeForm.controls; }

    saveForm() {
        if (this.employeeForm.valid) {
            this.eService.saveEmployee(this.employeeForm.value).subscribe((s) => {
                this._router.navigate(['/webapi']);
            });
        } else {
            Object.keys(this.employeeForm.controls).forEach(field => {
                const control = this.employeeForm.get(field);
                control.markAsTouched({ onlySelf: true });
            });
        }
    }

    ngOnDestroy(): void {
        this.rSub.unsubscribe();
    }
}