import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
    selector: '[change-content]'
})
export class ChangeContentDirective {
    constructor(element: ElementRef<HTMLElement>, renderer: Renderer2) {
        // console.log(element);
        element.nativeElement.innerText = "Changed....";
        renderer.setStyle(element.nativeElement, "border", '2px solid red');
    }
}