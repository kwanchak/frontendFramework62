import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "src/app/login/login.component";
import { RegisterComponent } from "src/app/register/register.component";

const routes: Routes = [
  { path: "", redirectTo: "/login", pathMatch: "full" }, //redirect หน้าแรกไป Login
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "home", component: HomeComponent },
  {
    path: "**",
    redirectTo: "/login"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
