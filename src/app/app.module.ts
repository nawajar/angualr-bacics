import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UseInterfacesComponent } from './use-interfaces/use-interfaces.component';
import { DomOperationComponent } from './dom-operation/dom-operation.component';
import { ParentComponent } from './control-container/parent/parent.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ChildComponent } from './control-container/child/child.component';
@NgModule({
  declarations: [
    AppComponent,
    UseInterfacesComponent,
    DomOperationComponent,
    ParentComponent,
    ChildComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
