import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { CustomerDetailComponent } from './customer-detail';
import {CustomerComponent} from './customer';
const routes: Routes = [
  { path: '', component: CustomerComponent },
  { path: 'customer', component: CustomerDetailComponent },
  { path: '**', redirectTo: '' }  
];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });