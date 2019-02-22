import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { ContactmanagerAppComponent } from './contactmanager-app.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { ContactDetailsComponent } from './components/contact-details/contact-details.component';

import { MaterialModule } from '../shared/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { UserService } from '../services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { NotesComponent } from './components/notes/notes.component';
import { NewContactDialogComponent } from './components/new-contact-dialog/new-contact-dialog.component';
import { CarouselTestComponent } from './components/courosel-test/carousel-test.component';
import { NguCarouselModule } from '@ngu/carousel';
const routes: Routes = [
  {
    path: '',
    component: ContactmanagerAppComponent,
    children: [
      { path: ':id', component: ContactListComponent },
      { path: '', component: ContactListComponent }
    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    HttpClientModule,
    NguCarouselModule,
    RouterModule.forChild(routes)
  ],
  providers: [UserService],
  declarations: [
    ContactmanagerAppComponent,
    MainContentComponent,
    NotesComponent,
    NewContactDialogComponent,
    CarouselTestComponent,
    ContactListComponent,
    ContactDetailsComponent
  ],
  entryComponents: [NewContactDialogComponent]
})
export class ContactmanagerModule {}
