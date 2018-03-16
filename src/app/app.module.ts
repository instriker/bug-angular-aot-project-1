import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ForumsComponentWithoutIndex, ForumsComponentWithIndex } from './forums/forums.component';

@NgModule({
  declarations: [
    AppComponent,
    ForumsComponentWithoutIndex,
    ForumsComponentWithIndex
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
