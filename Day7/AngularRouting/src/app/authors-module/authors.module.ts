import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorsRootComponent } from './components/authors-root/authors-root.component';
import { ListComponent } from './components/list/list.component';
import { QuoteComponent } from './components/quote/quote.component';

@NgModule({
    imports: [CommonModule],
    exports: [AuthorsRootComponent],
    declarations: [AuthorsRootComponent, ListComponent, QuoteComponent],
})
export class AuthorsModule { }
