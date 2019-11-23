import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./auth/login/login.component";
import {SubscriptionsComponent} from "./subscription/subscriptions/subscriptions.component";


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'subscriptions', component: SubscriptionsComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
    })
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }

