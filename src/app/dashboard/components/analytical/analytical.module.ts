import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../shared/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AnalyticalComponent } from './analytical.component';
import { Routes, RouterModule } from '@angular/router';
import { ChartsModule } from 'ng2-charts';
// AvatarModule
import { AvatarModule } from 'ngx-avatar';

const routes: Routes = [
  {
    path: '',
    component: AnalyticalComponent
  },
  {
    path: 'analytical',
    component: AnalyticalComponent
  },
  { path: '**', redirectTo: 'analytical' }
];


@NgModule({
  declarations: [
    AnalyticalComponent,
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
export class AnalyticalModule { }
