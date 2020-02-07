import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./components/login/login.component";
import {RegisterComponent} from "./components/register/register.component";
import {HomeComponent} from "./components/home/home.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {NotFoundComponent} from "./components/not-found/not-found.component";
import {ArbitrageComponent} from "./components/dashboard/arbitrage/arbitrage.component";
import {MenuComponent} from "./components/dashboard/menu/menu.component";

const routes: Routes = [
  {path: "", redirectTo: "/home", pathMatch: "full"},
  {path: "home", component: HomeComponent},
  {path: "login", component: LoginComponent},
  {path: "register", component: RegisterComponent},
  {
    path: "dashboard",
    component: DashboardComponent,
    children: [
      {path: "menu", component: MenuComponent},
      {path: "arbitrage", component: ArbitrageComponent},
      {path: "", redirectTo: "menu", pathMatch: "full"}
    ]
  },
  {path: "**", component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
