import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UseInterfacesComponent } from './use-interfaces/use-interfaces.component';
import { DomOperationComponent } from './dom-operation/dom-operation.component';
import { ParentComponent } from './control-container/parent/parent.component';

const routes: Routes = [
  { path: 'use-interfaces', component: UseInterfacesComponent },
  { path: 'dom-operation', component: DomOperationComponent },
  { path: 'control-container', component: ParentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
 
}
