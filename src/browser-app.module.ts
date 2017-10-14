import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WrapperComponent } from './wrapper.component';
import { WrapperModule } from './wrapper.module';

@NgModule({
  bootstrap: [ WrapperComponent ],
  imports: [
      BrowserAnimationsModule,
    BrowserModule.withServerTransition({
      appId: 'app'
    }),
    WrapperModule
  ]
})
export class BrowserAppModule {}
