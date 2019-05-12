import { Component, OnInit, Inject } from '@angular/core';
import { Author } from './models/app.author';
import { AuthorService } from './services/autor.service';

@Component({
    selector: 'root',
    templateUrl: 'root.component.html',
    styleUrls: ['./root.component.css'],
    providers: [AuthorService]
})

export class RootComponent implements OnInit {
    list: Array<Author>;
    selectedAuthor: Author;

    // constructor(@Inject(AuthorService) private aService: any) { }
    constructor(private aService: AuthorService) { }

    ngOnInit() {
        this.list = this.aService.Authors;
    }

    selectAuthor(a: Author) {
        this.selectedAuthor = a;
    }

    isSelected(a: Author) {
        return this.selectedAuthor === a;
    }
}