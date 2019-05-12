import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { COneComponent } from "./cone.component";
import { CTwoComponent } from "./ctwo.component";

@NgModule({
    imports: [BrowserModule],
    declarations: [COneComponent, CTwoComponent],
    bootstrap: [COneComponent, CTwoComponent]
})
export class RootModule {

}