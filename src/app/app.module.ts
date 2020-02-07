/* Modules */
import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {MaterialModule} from "./material/material.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
/* Components */
import {AppComponent} from "./app.component";
import {NavbarComponent} from "./components/navbar/navbar.component";
import {FooterComponent} from "./components/footer/footer.component";
import {AppRoutingModule} from "./app-routing.module";
import {LoginComponent} from "./components/login/login.component";
import {RegisterComponent} from "./components/register/register.component";
import {HomeComponent} from "./components/home/home.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {DesignComponent} from "./components/home/design/design.component";
import {DemoComponent} from "./components/home/demo/demo.component";
import {PricingComponent} from "./components/home/pricing/pricing.component";
import {HeaderComponent} from "./components/header/header.component";
import {NotFoundComponent} from "./components/not-found/not-found.component";
/* Services */
import {ValidationService} from "./services/validation/validation.service";
import {ApiClient} from "./services/api/api-client.service";
import {ApiService} from "./services/api/api.service";
import {MenuComponent} from "./components/dashboard/menu/menu.component";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    NotFoundComponent,
    DashboardComponent,
    MenuComponent,
    DesignComponent,
    DemoComponent,
    PricingComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    NgbModule.forRoot()
  ],
  providers: [ValidationService, ApiClient, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
