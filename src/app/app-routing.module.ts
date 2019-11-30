import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./auth/login/login.component";
import {SubscriptionsComponent} from "./subscription/subscriptions/subscriptions.component";
import {TrainingListComponent} from "./training/training-list/training-list.component";
import {NewSubscriptionComponent} from "./subscription/new-subscription/new-subscription.component";
import {EditSubscriptionComponent} from "./subscription/edit-subscription/edit-subscription.component";


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'subscriptions', component: SubscriptionsComponent },
  { path: 'subscriptions/:subscriptionId/edit', component: EditSubscriptionComponent },
  { path: 'trainings', component: TrainingListComponent },
  { path: 'trainings/:trainingId/subscribe', component: NewSubscriptionComponent },
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

