import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'templated-form',
    templateUrl: 'templated-form.component.html'
})

export class TemplatedFormComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

    logForm(frm: any) {
        console.log(frm.value);
    }
}