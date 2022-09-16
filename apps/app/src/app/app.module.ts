import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import {LibFeature1Module} from "@nx-references/lib-feature1";

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
    imports: [BrowserModule, LibFeature1Module],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
