import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RootComponent } from "./root.component";
import { FormsModule } from "@angular/forms";

import { AssignmentTwoComponent } from "./assign-two/assign-two.component";
import { ListComponent } from "./list/list.component";
import { ChangeContentDirective } from "./directives/cc.directive";

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [RootComponent, AssignmentTwoComponent, ListComponent,
        ChangeContentDirective],
    bootstrap: [RootComponent]
})
export class RootModule {

}