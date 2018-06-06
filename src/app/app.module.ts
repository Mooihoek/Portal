import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ClarityModule } from '@clr/angular';
import { AppComponent } from './app.component';
import { ROUTING } from "./app.routing";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { DashboardsComponent } from './dashboards/dashboards.component';
import { FaqsComponent } from './faqs/faqs.component';
import { ToolsComponent } from './tools/tools.component';
import { TestComponent } from './test/test.component';
import { Routes } from "@angular/router";



@NgModule({
    declarations: [
        AppComponent,
        AboutComponent,
        HomeComponent,
        DashboardsComponent,
        FaqsComponent,
        ToolsComponent,
        TestComponent,
       
       
    ],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        FormsModule,
        HttpModule,
        ClarityModule,
        ROUTING
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
