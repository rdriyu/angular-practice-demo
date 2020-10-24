import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GitBranch1Component } from './git-branch1/git-branch1.component';
import { GitBranch2Component } from './git-branch2/git-branch2.component';

@NgModule({
  declarations: [
    AppComponent,
    GitBranch1Component,
    GitBranch2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
