import { Component, OnInit } from '@angular/core';
import { Author } from '../../models/app.author';
import { AuthorService } from '../../services/author.service';

@Component({
    selector: 'a-list',
    styleUrls: ['./list.component.css'],
    templateUrl: 'list.component.html'
})

export class ListComponent implements OnInit {
    list: Array<Author>;
    selectedAuthor: Author;

    constructor(private _aService: AuthorService) { }

    ngOnInit() {
        this.list = this._aService.Authors;
    }

    selectAuthor(a: Author) {
        this._aService.SelectedAuthor = a;
        this.selectedAuthor = this._aService.SelectedAuthor;
    }

    isSelected(a: Author) {
        return this.selectedAuthor === a;
    }
}