import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../shared/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: 'mailbox', loadChildren: () => import('./components/mailbox/mailbox.module').then(m => m.MailBoxModule) },
    { path: '**', redirectTo: 'mailbox' }
];


@NgModule({
    declarations: [
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        MaterialModule,
        FlexLayoutModule
    ]
})
export class MailBoxModule { }
