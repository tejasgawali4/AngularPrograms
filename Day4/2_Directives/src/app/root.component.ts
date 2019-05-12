import { Component } from "@angular/core";

@Component({
    selector: 'root',
    template: `
        <div class="container">    
            <div class="row">
                <h1 class="text-info">Directives</h1>
            </div>

            <div [hidden]=!flag>
                <h1>Custom Directives</h1>

                <h3 change-content>Hello</h3>
                <h3 change-content>Hi</h3>
            </div>

            <div [hidden]=flag>
                <h1>Attribute Directives</h1>
                <h4 [ngStyle]="myStyles">Style Binding</h4>
                <assign-two></assign-two>
            </div>

            <div [hidden]=flag>
                <h1>Structural Directives</h1>

                <div>
                    <h2 [style.display]="name ? 'block' : 'none'">Hello, {{name}}</h2>
                    
                    <ng-template [ngIf]="name">
                        <h2>Hello, {{name}}</h2>
                    </ng-template>

                    <h2 *ngIf="name">Hello, {{name}}</h2>

                    <h2 *ngIf="name; else elseBlock">Hello, {{name}}</h2>

                    <ng-template #elseBlock>
                        <h2>Nothing to Display</h2>
                    </ng-template>
                </div>

                <list></list>
            </div>
        </div>
    `
})
export class RootComponent {
    myStyles = {
        'background-color': 'green',
        'font-size': '20px',
        'color': 'white'
    };

    flag = true;

    name: string;

    constructor() {
        // this.name = "Synechron";
    }
}