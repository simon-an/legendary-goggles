import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';
import { UserLandingPageComponent } from './user-landing-page/user-landing-page.component';
import { SafePageComponent } from './containers/safe-page/safe-page.component';

const routes: Routes = [
  {
    path: '',
    component: UserLandingPageComponent,
    children: [{ path: 'safes/:id', component: SafePageComponent }],
  } as Route,
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
