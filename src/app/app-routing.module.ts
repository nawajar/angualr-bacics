import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UseInterfacesComponent } from './use-interfaces/use-interfaces.component';
import { DomOperationComponent } from './dom-operation/dom-operation.component';
import { ParentComponent } from './control-container/parent/parent.component';
import { TemplateComponent } from './template/template.component';
import { NestedCompComponent } from './nested-comp/nested-comp.component';
import { ManyCalendarComponent } from './many-calendar/many-calendar.component';

const routes: Routes = [
  { path: 'use-interfaces', component: UseInterfacesComponent },
  { path: 'dom-operation', component: DomOperationComponent },
  { path: 'control-container', component: ParentComponent },
  { path: 'template', component: TemplateComponent },
  { path: 'nested-comp', component: NestedCompComponent },
  { path: 'many-calendar', component: ManyCalendarComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
 
}
