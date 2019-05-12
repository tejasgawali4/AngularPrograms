import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RootComponent } from "./root.component";
import { COneComponent } from "./c-one/cone.component";
import { CTwoComponent } from "./c-two/ctwo.component";

@NgModule({
    imports: [BrowserModule],
    declarations: [RootComponent, COneComponent, CTwoComponent],
    bootstrap: [RootComponent]
})
export class RootModule {

}