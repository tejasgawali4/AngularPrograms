import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {APP_BASE_HREF} from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { RouterModule } from "@angular/router";

import { routes } from "./root.routes";

import { RootComponent } from "./components/root/root.component";
import { AuthorsModule } from "./authors-module/authors.module";
import { BSNavigationComponent } from "./components/bs-nav/bs-nav.component";
import { HomeComponent } from "./components/home/home.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { AboutComponent } from "./components/about/about.component";
import { ProductsComponent } from "./components/products/products.component";
import { ProductNotSelectedComponent } from "./components/products/ns.component";
import { ProductDetailsComponent } from "./components/products/pd.component";
import { AdminComponent } from "./components/admin/admin.component";
import { AuthGuardService } from "./services/auth-guard.service";
import { LoginComponent } from "./components/login/login.component";
import { AuthenticationService } from "./services/authentication.service";
import { TokenInterceptorService } from "./services/token-interceptor.service";
import { WebAPIComponent } from "./components/web-api/web-api.component";
import { ManageEmployeeComponent } from "./components/web-api/manage-employee.component";

@NgModule({
    imports: [BrowserModule, FormsModule, ReactiveFormsModule,
        HttpClientModule, RouterModule.forRoot(routes), AuthorsModule],
    declarations: [RootComponent, BSNavigationComponent, NotFoundComponent,
        HomeComponent, AboutComponent,
        ProductsComponent, ProductNotSelectedComponent, ProductDetailsComponent,
        AdminComponent, LoginComponent,
        WebAPIComponent, ManageEmployeeComponent
    ],
    providers: [
        AuthenticationService,
        AuthGuardService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: TokenInterceptorService,
            multi: true
        },
        {
            provide: APP_BASE_HREF, 
            useValue: '/'
        }
    ],
    bootstrap: [RootComponent]
})
export class RootModule { }