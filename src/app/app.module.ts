import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PlatsListComponent } from './plats-list/plats-list.component';
import { PlatsDetailsComponent } from './plats-details/plats-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PlatsListComponent,
    PlatsDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
