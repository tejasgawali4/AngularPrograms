import { Component, OnInit, Inject } from '@angular/core';
import { AuthorService } from './services/autor.service';

@Component({
    selector: 'root',
    templateUrl: 'root.component.html',
    providers: [AuthorService]
})

export class RootComponent implements OnInit {
    constructor() { }

    ngOnInit() {
    }
}