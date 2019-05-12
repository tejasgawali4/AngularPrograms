// // 1. Element Inline Style
// import { Component } from "@angular/core";

// @Component({
//     selector: 'c-one',
//     template: `
//         <h2 class="text-info">Hello from Component One</h2>
//         <h2 style="border-style: solid; border-width: 2px; border-color: blue;">From Component One</h2>
//     `
// })
// export class COneComponent {

// }

// // 2. Template Inline Style
// import { Component, ViewEncapsulation } from "@angular/core";

// @Component({
//     selector: 'c-one',
//     template: `
//         <style>
//             .card {
//                 border-style: solid; 
//                 border-width: 2px; 
//                 border-color: blue;
//             }
//         </style>
        
//         <h2 class="text-info">Hello from Component One</h2>
//         <h2 class="card">From Component One</h2>
//     `,
//     encapsulation: ViewEncapsulation.ShadowDom
// })
// export class COneComponent {

// }

// 3. Component Inline Style
// import { Component } from "@angular/core";

// @Component({
//     selector: 'c-one',
//     styles: [`
//         .card {
//             border-style: solid; 
//             border-width: 2px; 
//             border-color: blue;
//         }
//     `],
//     template: `
//         <h2 class="text-info">Hello from Component One</h2>
//         <h2 class="card">From Component One</h2>
//     `
// })
// export class COneComponent {

// }

// 4. External CSS
import { Component } from "@angular/core";

@Component({
    selector: 'c-one',
    // styles: [require('./cone.component.css').toString()],
    styleUrls: ['./cone.component.css'.toString()],
    template: `
        <h2 class="text-info">Hello from Component One</h2>
        <h2 class="card1">From Component One</h2>
    `
})
export class COneComponent {

}