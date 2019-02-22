import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './shared/material.module';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './services/user.service';

const routes: Routes = [
  { path: 'contactlist', loadChildren: './contactmanager/contactmanager.module#ContactmanagerModule' },
  { path: 'charts', loadChildren: './charts/chart.module#ChartModule' },
  { path: 'table', loadChildren: './table/table.module#TableModule' },
  {
    path: 'ui-component', loadChildren: './ui-components/ui-components.module#UiComponentModule'
  },
  { path: '**', redirectTo: 'contactlist' }
];

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
