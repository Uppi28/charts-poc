import { Routes, RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';

import { HomeComponent } from "./home/home.component";
import { CommercialComponent } from './commercial/commercial.component';
import { RndComponent } from './rnd/rnd.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { LogisticsComponent } from './logistics/logistics.component';
import { SustainabilityComponent } from './sustainability/sustainability.component';


const appRoutes : Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'commercial', component: CommercialComponent},
    {path: 'rnd', component: RndComponent},
    {path: 'portfolio', component: PortfolioComponent},
    {path: 'logistics', component: LogisticsComponent},
    {path: 'sustainability', component: SustainabilityComponent},
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule{

}