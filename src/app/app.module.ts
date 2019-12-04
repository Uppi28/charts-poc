import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from "ng2-charts";
import { MatButtonToggleModule, MatIconModule } from "@angular/material";

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from '../app/app-routing.module';
import { BarChartComponent } from './shared/bar-chart/bar-chart.component';
import { LineChartComponent } from './shared/line-chart/line-chart.component';
import { DoughnutChartComponent } from "./shared/doughnut-chart/doughnut-chart.component";
import { HomeComponent } from './home/home.component';
import { RndComponent } from './rnd/rnd.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { LogisticsComponent } from './logistics/logistics.component';
import { CommercialComponent } from './commercial/commercial.component';
import { FiltersComponent } from './shared/filters/filters.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BarChartComponent,
    LineChartComponent,
    DoughnutChartComponent,
    HomeComponent,
    RndComponent,
    PortfolioComponent,
    LogisticsComponent,
    CommercialComponent,
    FiltersComponent,
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonToggleModule,
    MatIconModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
