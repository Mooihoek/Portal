/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { DashboardsComponent } from './dashboards/dashboards.component';
import { ToolsComponent } from './tools/tools.component';
import { FaqsComponent } from './faqs/faqs.component';
import { TestComponent } from './test/test.component';



export const ROUTES: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'dashboards', component: DashboardsComponent},
    {path: 'tools', component: ToolsComponent},
    {path: 'faqs', component: FaqsComponent},
    {path: 'test', component:TestComponent},
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(ROUTES);
