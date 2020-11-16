import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../shared/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Routes, RouterModule } from '@angular/router';
import { ContactGridComponent } from './contact-grid.component';

// AvatarModule
import { AvatarModule } from 'ngx-avatar';

const routes: Routes = [
  {
    path: '',
    component: ContactGridComponent
  },
  {
    path: 'contact-grid',
    component: ContactGridComponent
  },
  { path: '**', redirectTo: 'contact-grid' }
];


@NgModule({
  declarations: [
    ContactGridComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    FlexLayoutModule,
    AvatarModule
  ]
})
export class ContactGridModule { }
