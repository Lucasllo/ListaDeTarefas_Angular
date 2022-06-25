import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DiretivaIFComponent } from './diretiva-if/diretiva-if.component';
import { DiretivaFORComponent } from './diretiva-for/diretiva-for.component';

@NgModule({
  declarations: [
    AppComponent,
    DiretivaIFComponent,
    DiretivaFORComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
