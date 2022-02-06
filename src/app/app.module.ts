import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { AccountComponent } from './sidebar/tabs/account/account.component';
import { ShoppingComponent } from './sidebar/tabs/shopping/shopping.component';
import { SettingsComponent } from './sidebar/tabs/settings/settings.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    AccountComponent,
    ShoppingComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
