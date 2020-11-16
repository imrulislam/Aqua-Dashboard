import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../shared/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Routes, RouterModule } from '@angular/router';
import { CalendarComponent } from './calendar.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

const routes: Routes = [
    {
        path: '',
        component: CalendarComponent
    },
    {
        path: 'calendar',
        component: CalendarComponent
    },
    { path: '**', redirectTo: 'calendar' }
];


@NgModule({
    declarations: [
        CalendarComponent,
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        CalendarModule.forRoot({
            provide: DateAdapter,
            useFactory: adapterFactory,
        }),
        MaterialModule,
        FlexLayoutModule
    ]
})
export class AppCalendarModule { }
