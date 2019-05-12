import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'list',
    templateUrl: 'list.component.html'
})

export class ListComponent implements OnInit {
    personList: Array<string>;
    selectedPerson: string;

    constructor() {
        this.personList = ["Manish", "Abhijeet", "Abhishek", "Ramakant", "Subodh"];
    }

    ngOnInit() { }

    select(p: string, e: Event) {
        this.selectedPerson = p;
        e.preventDefault();
    }
}