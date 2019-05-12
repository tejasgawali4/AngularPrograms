// 3. FormBuilder & Validations
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidatorFn } from '@angular/forms';

// function ageRangeValidator(control: AbstractControl): { [key: string]: boolean } | null {
//     if (control.value !== undefined && (isNaN(control.value) || control.value < 18 || control.value > 45)) {
//         return { 'ageRange': true };
//     }
//     return null;
// }

function ageRangeValidator(min: number, max: number): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
        if (!control.value) {
            return null;
        }

        if (control.value !== undefined && (isNaN(control.value) || control.value < min || control.value > max)) {
            return { 'ageRange': true };
        }
        return null;
    };
}

@Component({
    selector: 'reactive-form',
    templateUrl: 'reactive-form.component.html'
})
export class ReactiveFormComponent implements OnInit {
    countries = [{ 'id': "", 'name': 'Select Country' }, { 'id': 1, 'name': 'India' }, { 'id': 2, 'name': 'USA' }, { 'id': 3, 'name': 'UK' }];

    minAge = 18;
    maxAge = 60;

    regForm: FormGroup;

    constructor(private frmBuilder: FormBuilder) { }

    ngOnInit() {
        this.regForm = this.frmBuilder.group({
            firstname: ["", Validators.required],
            lastname: ["", Validators.compose([
                Validators.required,
                Validators.minLength(2),
                Validators.maxLength(6)
            ])],
            // age: ["", [Validators.required, ageRangeValidator]],
            age: [0, [Validators.required, ageRangeValidator(this.minAge, this.maxAge)]],
            country: ["", Validators.required],
            address: this.frmBuilder.group({
                city: ["", Validators.required],
                zip: 0
            })
        });
    }

    get frm() { return this.regForm.controls; }
    get address() { return (<FormGroup>this.regForm.controls.address).controls; }

    logForm() {
        console.log(this.regForm);
        if (this.regForm.valid)
            console.log(this.regForm.value);
        else
            console.error("Invalid Data!");
    }

    setValue() {
        this.regForm.setValue({
            firstname: "Abhijeet",
            lastname: "Gole",
            address: {
                city: "Pune",
                zip: 411029
            }
        });
    }

    patchValue() {
        this.regForm.patchValue({
            firstname: "Abhijeet",
            lastname: "Gole"
        });
    }
}

// // 2. FormBuilder
// import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormBuilder } from '@angular/forms';

// @Component({
//     selector: 'reactive-form',
//     templateUrl: 'reactive-form.component.html'
// })

// export class ReactiveFormComponent implements OnInit {
//     regForm: FormGroup;

//     constructor(private frmBuilder: FormBuilder) { }

//     ngOnInit() {
//         this.regForm = this.frmBuilder.group({
//             firstname: "",
//             lastname: "",
//             address: this.frmBuilder.group({
//                 city: "",
//                 zip: 0
//             })
//         });
//     }

//     logForm() {
//         console.log(this.regForm.value);
//     }

//     setValue() {
//         this.regForm.setValue({
//             firstname: "Abhijeet",
//             lastname: "Gole",
//             address: {
//                 city: "Pune",
//                 zip: 411029
//             }
//         });
//     }

//     patchValue() {
//         this.regForm.patchValue({
//             firstname: "Abhijeet",
//             lastname: "Gole"
//         });
//     }
// }

// 1. FormGroup & FormControl
// import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormControl } from '@angular/forms';

// @Component({
//     selector: 'reactive-form',
//     templateUrl: 'reactive-form.component.html'
// })

// export class ReactiveFormComponent implements OnInit {
//     regForm: FormGroup;

//     constructor() { }

//     ngOnInit() {
//         this.regForm = new FormGroup({
//             firstname: new FormControl(),
//             lastname: new FormControl(),
//             address: new FormGroup({
//                 city: new FormControl(),
//                 zip: new FormControl()
//             })
//         });
//     }

//     logForm() {
//         console.log(this.regForm.value);
//     }
// }