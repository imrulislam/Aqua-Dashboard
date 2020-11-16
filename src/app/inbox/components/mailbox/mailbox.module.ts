import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../shared/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Routes, RouterModule } from '@angular/router';
import { MailBoxComponent } from './mailbox.component';

const routes: Routes = [
    {
        path: '',
        component: MailBoxComponent
    },
    {
        path: 'mailbox',
        component: MailBoxComponent
    },
    { path: '**', redirectTo: 'mailbox' }
];


@NgModule({
    declarations: [
        MailBoxComponent,
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        MaterialModule,
        FlexLayoutModule
    ]
})
export class MailBoxModule { }
