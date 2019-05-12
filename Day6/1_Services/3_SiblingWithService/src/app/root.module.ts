import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { RootComponent } from "./root.component";
import { ListComponent } from "./list/list.component";
import { QuoteComponent } from "./quote/quote.component";

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [RootComponent, ListComponent, QuoteComponent],
    bootstrap: [RootComponent]
})
export class RootModule { }