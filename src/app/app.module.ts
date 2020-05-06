import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { AngularMaterialMenuComponent } from "./angular-material-menu/angular-material-menu.component";
import { NgxBootstrapMenuComponent } from "./ngx-bootstrap-menu/ngx-bootstrap-menu.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ItemListBarAMComponent } from "./angular-material-menu/item-list-bar/item-list-bar-am.component";

import { MatDividerModule } from "@angular/material/divider";
import { MatListModule } from "@angular/material/list";
import { MatSliderModule } from "@angular/material/slider";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatInputModule } from "@angular/material/input";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { ItemListBarNBComponent } from './ngx-bootstrap-menu/item-list-bar/item-list-bar-ng.component';

import {RouterModule} from '@angular/router';

import { CollapseModule } from 'ngx-bootstrap/collapse';

@NgModule({
  declarations: [
    AppComponent,
    AngularMaterialMenuComponent,
    NgxBootstrapMenuComponent,
    ItemListBarAMComponent,
    ItemListBarNBComponent
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
