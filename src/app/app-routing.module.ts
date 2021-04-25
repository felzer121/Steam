import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DotaComponent } from './components/dota/dota.component';
import { CsComponent } from './components/cs/cs.component';

const routes: Routes = [
  { path: 'dota', component: DotaComponent },
  { path: 'dota', component: DotaComponent },
  { path: 'cs', component: CsComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
