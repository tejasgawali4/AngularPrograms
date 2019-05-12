import { NgModule } from '@angular/core';
import { LazyOneComponent } from './components/lazy-one.component';
import { RouterModule } from '@angular/router';
import { lazyRoutes } from './lazy.routes';

@NgModule({
    imports: [RouterModule.forChild(lazyRoutes)],
    exports: [RouterModule],
    declarations: [LazyOneComponent],
})
export class LazyModule { }
