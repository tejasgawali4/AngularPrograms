import { Component, OnInit, OnDestroy } from '@angular/core';
import { Author } from '../../models/app.author';
import { AuthorService } from '../../services/author.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'quote',
    styleUrls: ['./quote.component.css'],
    templateUrl: 'quote.component.html'
})

export class QuoteComponent implements OnInit, OnDestroy {
    selectedAuthor: Author;
    sa_Subscription: Subscription;

    constructor(private _aService: AuthorService) { }

    ngOnInit() {
        this.sa_Subscription = this._aService.SelectedAuthorChanged.subscribe(() => {
            this.selectedAuthor = this._aService.SelectedAuthor;
        });
    }

    ngOnDestroy(): void {
        this.sa_Subscription.unsubscribe();
    }
}