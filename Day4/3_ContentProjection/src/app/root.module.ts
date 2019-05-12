import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RootComponent } from "./root.component";
import { FormsModule } from "@angular/forms";

import { COneComponent } from "./c-one/cone.component";
import { IconInputComponent } from "./icon-input/icon-input.component";

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [RootComponent, COneComponent, IconInputComponent],
    bootstrap: [RootComponent]
})
export class RootModule {

}