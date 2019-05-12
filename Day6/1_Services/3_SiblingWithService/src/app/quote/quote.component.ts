import { Component, OnInit } from '@angular/core';
import { Author } from '../models/app.author';
import { AuthorService } from '../services/autor.service';

@Component({
    selector: 'quote',
    templateUrl: 'quote.component.html',
    styleUrls: ['./quote.component.css']
})

export class QuoteComponent implements OnInit {
    selectedAuthor: Author;

    constructor(private aService: AuthorService) { }

    ngOnInit() { }

    getAuthor() {
        this.selectedAuthor = this.aService.SelectedAuthor;
    }
}