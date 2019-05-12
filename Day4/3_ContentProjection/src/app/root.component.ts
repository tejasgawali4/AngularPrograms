import { Component } from "@angular/core";

@Component({
    selector: 'root',
    template: `
        <div class="container">    
            <div class="row">
                <h1 class="text-info">Content Projection</h1>
            </div>

            <icon-input>
                <input class="form-control" type="email" placeholder="Enter Email"/>
            </icon-input>

            <!-- <c-one>
                <button class="btn btn-info">Click One</button>
                <button class="btn btn-success">Click Two</button>
            </c-one> -->

            <!-- <c-one>
                <h2>From Root</h2>
            </c-one> -->
        </div>
    `
})
export class RootComponent {
    constructor() {
    }
}