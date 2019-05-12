import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RootComponent } from "./root.component";
import { MOneModule } from "./m-one/m-one.module";
import { MTwoModule } from "./m-two/m-two.module";

@NgModule({
    imports: [BrowserModule, MOneModule, MTwoModule],
    declarations: [RootComponent],
    bootstrap: [RootComponent]
})
export class RootModule {

}