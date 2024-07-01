import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { TwofactorComponent } from './components/twofactor/twofactor.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { SendCodefileComponent } from './components/send-codefile/send-codefile.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EmailalertComponent } from './components/emailalert/emailalert.component';


export const routes: Routes = [
  { path: 'auth/login', component: LoginComponent },
  { path: 'auth/verify', component: TwofactorComponent },
  { path: 'email-alert', component: EmailalertComponent },
  { path: '', redirectTo: '/auth/login', pathMatch: 'full'}, // Redirect to login by default
  { 
    path: 'dashboard', 
    component: DashboardComponent,
    // canActivate: [AuthGuard], // Uncomment if using AuthGuard
    children: [
      { path: 'main-content', component: MainContentComponent },
      { path: 'send-codefile', component: SendCodefileComponent },
      { path: 'home', component: HomeComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
