import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AaaComponent } from './aaa/aaa.component';
import { BbbComponent } from './bbb/bbb.component';
import { CccComponent } from './ccc/ccc.component';
import { MatButtonModule } from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTableModule} from '@angular/material/table';
import { CustomUrlSerializer } from './urlSerializer';
import { UrlSerializer } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    AaaComponent,
    BbbComponent,
    CccComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatGridListModule,
    MatTableModule,
    BrowserAnimationsModule
  ],

  providers: [
    // sem isso a roda fica toda customizar
    { provide: UrlSerializer, useClass: CustomUrlSerializer }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
