import { Component, OnInit, OnDestroy } from '@angular/core';
import { Author } from '../models/app.author';
import { AuthorService } from '../services/autor.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'quote',
    templateUrl: 'quote.component.html',
    styleUrls: ['./quote.component.css']
})

export class QuoteComponent implements OnInit, OnDestroy {
    selectedAuthor: Author;
    sac_Subscription: Subscription;

    constructor(private aService: AuthorService) { }

    ngOnInit() {
        this.sac_Subscription = this.aService.SelectedAuthorChanged.subscribe(() => {
            this.selectedAuthor = this.aService.SelectedAuthor;
        });
    }

    ngOnDestroy(): void {
        this.sac_Subscription.unsubscribe();
    }
}