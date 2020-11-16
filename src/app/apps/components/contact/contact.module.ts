import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../shared/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact.component';

// AvatarModule
import { AvatarModule } from 'ngx-avatar';

const routes: Routes = [
  {
    path: '',
    component: ContactComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  { path: '**', redirectTo: 'contact' }
];


@NgModule({
  declarations: [
    ContactComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    FlexLayoutModule,
    AvatarModule
  ]
})
export class ContactModule { }
