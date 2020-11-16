import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../shared/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Routes, RouterModule } from '@angular/router';
import { ChartsModule } from 'ng2-charts';
// AvatarModule
import { AvatarModule } from 'ngx-avatar';

const routes: Routes = [
  { path: 'analytical', loadChildren: () => import('./components/analytical/analytical.module').then(m => m.AnalyticalModule) },
  { path: 'demographical', loadChildren: () => import('./components/demographical/demographical.module').then(m => m.DemographicalModule) },
  { path: 'modern', loadChildren: () => import('./components/modern/modern.module').then(m => m.ModernModule) },
  { path: 'minimal', loadChildren: () => import('./components/minimal/minimal.module').then(m => m.MinimalModule) },
  { path: '**', redirectTo: 'analytical' }
];


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    FlexLayoutModule,
    ChartsModule,
    AvatarModule
  ]
})
export class DashboardModule { }
