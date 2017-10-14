import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { BrowserModule } from '@angular/platform-browser';

import { WrapperComponent } from './wrapper.component';
import { WrapperModule } from './wrapper.module';

@NgModule({
  bootstrap: [WrapperComponent],
  imports: [
    BrowserModule.withServerTransition({
      appId: 'app'
    }),
    ServerModule,
    WrapperModule
  ]
})
export class ServerAppModule {

}
