import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../shared/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: 'calendar', loadChildren: () => import('./components/calendar/calendar.module').then(m => m.AppCalendarModule) },
    { path: 'chat', loadChildren: () => import('./components/chat/chat.module').then(m => m.AppChatModule) },
    { path: 'contact', loadChildren: () => import('./components/contact/contact.module').then(m => m.ContactModule) },
    {
        path: 'contact-details',
        loadChildren: () => import('./components/contact-details/contact-details.module').then(m => m.ContactDetailsModule)
    },
    {
        path: 'contact-grid',
        loadChildren: () => import('./components/contact-grid/contact-grid.module').then(m => m.ContactGridModule)
    },
    { path: '**', redirectTo: 'calendar' }
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
export class AppsModule { }
