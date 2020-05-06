import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { AngularMaterialMenuComponent } from "./angular-material-menu/am-menu.component";
import { NgxBootstrapMenuComponent } from "./ngx-bootstrap-menu/nb-menu.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";


import { MatDividerModule } from "@angular/material/divider";
import { MatListModule } from "@angular/material/list";

import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatExpansionModule } from "@angular/material/expansion";


import {RouterModule} from '@angular/router';

import { CollapseModule } from 'ngx-bootstrap/collapse';
import { MenuItemAMComponent } from './angular-material-menu/menu-item/menu-item-am.component';
import { MenuItemNGComponent } from './ngx-bootstrap-menu/item-list-bar/menu-item-ng.component';

@NgModule({
  declarations: [
    AppComponent,
    AngularMaterialMenuComponent,
    NgxBootstrapMenuComponent,
    MenuItemAMComponent,
    MenuItemNGComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDividerModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatExpansionModule,
    RouterModule.forRoot([]),
    CollapseModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
