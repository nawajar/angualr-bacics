import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UseInterfacesComponent } from './use-interfaces/use-interfaces.component';

const routes: Routes = [
  { path: 'use-interfaces', component: UseInterfacesComponent },
  // { path: '', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
 
}
