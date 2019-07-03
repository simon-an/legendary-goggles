import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';
import { HomeLandingPageComponent } from './views/home';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AuthGuard } from '~core/guards/auth.guard';
import { AdminGuard } from '~core/guards/admin.guard';

const routes: Routes = [
  {
    path: 'home',
    component: HomeLandingPageComponent,
  } as Route,
  {
    path: 'user',
    loadChildren: () => import('./views/user/user.module').then(mod => mod.UserModule),
    canActivate: [AuthGuard],
    canLoad: [AuthGuard]
  },
  {
    path: 'admin',
    loadChildren: () => import('./views/admin/admin.module').then(mod => mod.AdminModule),
    canActivate: [AdminGuard],
    canLoad: [AdminGuard]
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
