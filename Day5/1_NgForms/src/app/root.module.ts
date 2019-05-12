import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RootComponent } from "./root.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { ModelBasedFormComponent } from "./model-based/model-based.component";
import { TemplatedFormComponent } from "./templated/templated-form.component";
import { ReactiveFormComponent } from "./reactive/reactive-form.component";
import { ValidationSummaryComponent } from "./validation-summary/validation-summary.component";

@NgModule({
    imports: [BrowserModule, FormsModule, ReactiveFormsModule],
    declarations: [RootComponent, ReactiveFormComponent, ValidationSummaryComponent,
        ModelBasedFormComponent, TemplatedFormComponent],
    bootstrap: [RootComponent]
})
export class RootModule {

}