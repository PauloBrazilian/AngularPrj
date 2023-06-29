import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponentComponent } from "./components/home-component/home-component.component";
import { EditarComponentComponent } from "./components/editar-component/editar-component.component";
import { LoginComponentComponent } from "./components/login-component/login-component.component";
import { RegisterComponentComponent } from "./components/register-component/register-component.component";

const routes: Routes = [
    { path: '', redirectTo: '/index', pathMatch: 'full'},
    {path: 'index', component: HomeComponentComponent},
    {path: 'editar', component: EditarComponentComponent},
    {path: 'login', component: LoginComponentComponent},
    {path: 'register', component: RegisterComponentComponent},    
]

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule{}
