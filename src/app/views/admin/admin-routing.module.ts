import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';
import { AdminLandingPageComponent } from './pages/admin-landing-page/admin-landing-page.component';

const routes: Routes = [
  {
    path: '',
    component: AdminLandingPageComponent,
  } as Route,
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
