import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from "ng2-charts";

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from '../app/app-routing.module';
import { BarChartComponent } from './shared/bar-chart/bar-chart.component';
import { LineChartComponent } from './shared/line-chart/line-chart.component';
import { HomeComponent } from './home/home.component';
import { RndComponent } from './rnd/rnd.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { LogisticsComponent } from './logistics/logistics.component';
import { CommercialComponent } from './commercial/commercial.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BarChartComponent,
    LineChartComponent,
    HomeComponent,
    RndComponent,
    PortfolioComponent,
    LogisticsComponent,
    CommercialComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
