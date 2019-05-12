import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../../services/author.service';

@Component({
    selector: 'authors-root',
    templateUrl: 'authors-root.component.html',
    providers: [AuthorService]
})

export class AuthorsRootComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}