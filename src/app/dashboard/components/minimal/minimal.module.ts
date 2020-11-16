import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../shared/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Routes, RouterModule } from '@angular/router';
import { MinimalComponent } from './minimal.component';
import { ChartsModule } from 'ng2-charts';
// AvatarModule
import { AvatarModule } from 'ngx-avatar';

const routes: Routes = [
  {
    path: '',
    component: MinimalComponent
  },
  {
    path: 'modern',
    component: MinimalComponent
  },
  { path: '**', redirectTo: 'modern' }
];


@NgModule({
  declarations: [
    MinimalComponent,
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
export class MinimalModule { }
