import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { AuthGuard } from './core/Guard/auth.guard';
import { PokeComponent } from './pages/poke/poke.component';
import { TestObservableComponent } from './pages/test-observable/test-observable.component';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'poke',
    component: PokeComponent,
    loadChildren: () =>
      import('./pages/poke/poke.module').then((m) => m.PokeModule),
  },
  {
    path: 'testObservable',
    component: TestObservableComponent,
  },
  { path: '**', redirectTo: '/login' },
  { path: '*', redirectTo: '/login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
