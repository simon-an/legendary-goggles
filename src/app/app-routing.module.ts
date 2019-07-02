import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';
import { HomeLandingPageComponent } from './views/home/home-landing-page/home-landing-page.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeLandingPageComponent,
  } as Route,
  {
    path: 'user',
    loadChildren: () => import('./views/user/user.module').then(mod => mod.UserModule),
  },
  {
    path: 'admin',
    loadChildren: () => import('./views/admin/admin.module').then(mod => mod.AdminModule),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
