import { Component, OnInit } from '@angular/core';

@Component({
    template: `
        <h2 class="text-info">Lazy Loaded Component</h2>
    `
})

export class LazyOneComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}