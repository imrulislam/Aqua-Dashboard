import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { LoginTwoComponent } from './component/login-2/login-2.component';
import { MaterialModule } from '../shared/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

const routes: Routes = [
    {
        path: '',
        component: LoginComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'login-2',
        component: LoginTwoComponent
    },
    { path: '**', redirectTo: 'login' }
];


@NgModule({
    declarations: [
        LoginComponent,
        LoginTwoComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        MaterialModule,
        FlexLayoutModule
    ]
})
export class LoginModule { }
