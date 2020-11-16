import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../shared/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Routes, RouterModule } from '@angular/router';
import { FileManagerComponent } from './file-manager.component';
import { ScrollingModule } from '@angular/cdk/scrolling';

const routes: Routes = [
    {
        path: '',
        component: FileManagerComponent
    },
    {
        path: 'file-manager',
        component: FileManagerComponent
    },
    { path: '**', redirectTo: 'file-manager' }
];


@NgModule({
    declarations: [
        FileManagerComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        MaterialModule,
        FlexLayoutModule,
        ScrollingModule
    ]
})
export class FileManagerModule { }
