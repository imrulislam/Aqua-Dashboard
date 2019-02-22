import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { PricingTableComponent } from './pricing-table/pricing-table.component';
import { CardComponent } from './card/card.component';
import { ButtonComponent } from './button/button.component';
import { HoverComponent } from './hover/hover.component';
import { ExpansionPanelComponent } from './expansion-panels/expansion-panels.component';
import { TabComponent } from './tab/tab.component';
import { BadgeLabelComponent } from './badge-labels/badge-labels.component';
import { CallActionComponent } from './call-action/call-action.component';
import { CoverComponent } from './cover/cover.component';
import { PopoverComponent } from './pop-over/pop-over.component';
import { RibbonsComponent } from './ribbons/ribbons.component';

import { UserService } from '../services/user.service';
import { UiComponentRoutingModule } from './ui-components.routing.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    FlexLayoutModule,
    UiComponentRoutingModule
  ],
  providers: [UserService],
  declarations: [
    PricingTableComponent,
    CardComponent,
    ButtonComponent,
    HoverComponent,
    ExpansionPanelComponent,
    TabComponent,
    BadgeLabelComponent,
    CallActionComponent,
    CoverComponent,
    PopoverComponent,
    RibbonsComponent
  ]
})
export class UiComponentModule { }
