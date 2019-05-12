import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { COneComponent } from "./cone.component";
import { CTwoComponent } from "./ctwo.component";
import { RootComponent } from "./root.component";

@NgModule({
    imports: [BrowserModule],
    declarations: [COneComponent, CTwoComponent, RootComponent],
    bootstrap: [RootComponent]
})
export class RootModule {

}