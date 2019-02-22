import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { MaterialModule } from '../shared/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { TableComponent } from './table/table.component';


import { TableRoutingModule } from './table.routing.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    FlexLayoutModule,
    TableRoutingModule
  ],
  declarations: [TableComponent]
})
export class TableModule { }
