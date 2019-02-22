import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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

const routes: Routes = [
  { path: 'pricing-table', component: PricingTableComponent },
  { path: 'card', component: CardComponent },
  { path: 'button', component: ButtonComponent },
  { path: 'hover', component: HoverComponent },
  { path: 'expansion-panel', component: ExpansionPanelComponent },
  { path: 'tab', component: TabComponent },
  { path: 'badges', component: BadgeLabelComponent },
  { path: 'call-action', component: CallActionComponent },
  { path: 'cover', component: CoverComponent },
  { path: 'popover', component: PopoverComponent },
  { path: 'ribbons', component: RibbonsComponent },
  { path: '**', redirectTo: 'pricing-table'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UiComponentRoutingModule { }
