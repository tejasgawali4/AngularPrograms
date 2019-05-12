import { Component, OnInit, OnDestroy } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductsService } from '../../services/products.service';
import { ActivatedRoute } from '@angular/router';

import { map } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
    template: `
        <div class="outerdiv">
            <div class="innerdiv">
                <div *ngIf="product else elseBlock">
                    <h3>{{product.name}}</h3>
                    <p>{{product.description}}</p>
                    <hr>
                    <h4>{{product.status}}</h4>
                </div>    
            </div>
        </div>
        <ng-template #elseBlock>
            <h3 class="text-danger">Product not Found..</h3>
        </ng-template>
    `
})

export class ProductDetailsComponent implements OnInit, OnDestroy {
    product: Product;
    rSub: Subscription;

    constructor(private _pService: ProductsService, private _route: ActivatedRoute) { }

    ngOnInit() {
        this.rSub = this._route.params.pipe(map(p => p['id'])).subscribe((id) => {
            this.product = this._pService.Products.find(p => p.id == id);
        });
    }

    ngOnDestroy(): void {
        this.rSub.unsubscribe();
    }
}