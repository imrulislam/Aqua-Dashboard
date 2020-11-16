import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../shared/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Routes, RouterModule } from '@angular/router';
import { ChatComponent } from './chat.component';

const routes: Routes = [
    {
        path: '',
        component: ChatComponent
    },
    {
        path: 'chat',
        component: ChatComponent
    },
    { path: '**', redirectTo: 'chat' }
];


@NgModule({
    declarations: [
        ChatComponent,
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        MaterialModule,
        FlexLayoutModule
    ]
})
export class AppChatModule { }
