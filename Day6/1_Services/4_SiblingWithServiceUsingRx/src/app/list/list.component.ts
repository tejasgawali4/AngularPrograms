import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../services/autor.service';
import { Author } from '../models/app.author';

@Component({
    selector: 'list',
    templateUrl: 'list.component.html',
    styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {
    list: Array<Author>;
    selectedAuthor: Author;

    constructor(private aService: AuthorService) { }

    ngOnInit() {
        this.list = this.aService.Authors;
    }

    selectAuthor(a: Author) {
        this.aService.SelectedAuthor = a;
        this.selectedAuthor = this.aService.SelectedAuthor;
    }

    isSelected(a: Author) {
        return this.selectedAuthor === a;
    }
}