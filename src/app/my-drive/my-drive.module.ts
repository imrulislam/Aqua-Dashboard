import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../shared/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: 'file-manager', loadChildren: () => import('./components/file-manager/file-manager.module').then(m => m.FileManagerModule) },
    { path: '**', redirectTo: 'file-manager' }
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
export class MyDriveModule { }
