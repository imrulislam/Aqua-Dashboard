import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../shared/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Routes, RouterModule } from '@angular/router';
import { ContactDetailsComponent } from './contact-details.component';

// AvatarModule
import { AvatarModule } from 'ngx-avatar';

const routes: Routes = [
  {
    path: '',
    component: ContactDetailsComponent
  },
  {
    path: 'contact-details',
    component: ContactDetailsComponent
  },
  { path: '**', redirectTo: 'contact-details' }
];


@NgModule({
  declarations: [
    ContactDetailsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    FlexLayoutModule,
    AvatarModule
  ]
})
export class ContactDetailsModule { }
