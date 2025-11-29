// Modulos del router
import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// Componentes
import { Home } from "./app/components/home/home";

const appRoutes: Routes = [
    {path: '', component: Home},
    {path: '**', component: Home}
];
export const routing: ModuleWithProviders<RouterModule> = RouterModule.forRoot(appRoutes);