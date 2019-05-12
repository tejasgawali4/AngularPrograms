import { Component, OnInit, Input } from '@angular/core';
import { NgForm, FormGroup } from '@angular/forms';

@Component({
    selector: 'validation-summary',
    templateUrl: './validation-summary.component.html'
})
export class ValidationSummaryComponent implements OnInit {
    @Input() form: FormGroup;
    errors: string[] = [];

    constructor() { }

    ngOnInit() {
        if (this.form instanceof FormGroup === false) {
            throw new Error('You must supply the validation summary with an FormGroup.');
        }
        this.form.statusChanges.subscribe(status => {
            this.resetErrorMessages();
            this.generateErrorMessages(this.form);
        });
    }

    resetErrorMessages() {
        this.errors.length = 0;
    }

    generateErrorMessages(formGroup: FormGroup) {
        Object.keys(formGroup.controls).forEach(controlName => {
            let control = formGroup.controls[controlName];
            let errors = control.errors;
            if (errors === null || errors.count === 0) {
                return;
            }
            // Handle the 'required' case
            if (errors.required) {
                this.errors.push(`${controlName} is required`);
            }
            // Handle 'minlength' case
            if (errors.minlength) {
                this.errors.push(`${controlName} minimum length is ${errors.minlength.requiredLength}.`);
            }
        });
    }
}