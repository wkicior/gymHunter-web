import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule } from "@angular/material/dialog";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { StoreModule } from '@ngrx/store';
import {reducers, ROOT_REDUCER} from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import {AuthEffects} from "./auth/auth.effects";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { SubscriptionsComponent } from './subscription/subscriptions/subscriptions.component';
import {SubscriptionsEffects} from "./subscription/subscriptions.effects";
import {AuthInterceptor} from "./auth/auth.interceptor";
import {storageMetaReducer} from "./reducers/storage.metareducer";
import {GymHunterEndpointUrlEnv} from "./app.config";
import { TrainingListComponent } from './training/training-list/training-list.component';
import {TrainingsEffects} from "./training/trainings.effects";
import { NewSubscriptionComponent } from './subscription/new-subscription/new-subscription.component';
import { EditSubscriptionComponent } from './subscription/edit-subscription/edit-subscription.component';
import { TopNavigationComponent } from './top-navigation/top-navigation.component';
import {clearState} from "./reducers/logout.metareducer";
import { ErrorDialogComponent } from './error/error-dialog/error-dialog.component';
import {HttpErrorInterceptor} from "./error/http-error-interceptor";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SubscriptionsComponent,
    TrainingListComponent,
    NewSubscriptionComponent,
    EditSubscriptionComponent,
    TopNavigationComponent,
    ErrorDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDialogModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot(ROOT_REDUCER, {
      metaReducers: [clearState, storageMetaReducer],
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
        strictStateSerializability: true,
        strictActionSerializability: true,
      }
    }),
    EffectsModule.forRoot([AuthEffects, SubscriptionsEffects, TrainingsEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [
    GymHunterEndpointUrlEnv,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true },
    {
      provide: ROOT_REDUCER,
      useValue: reducers},
  ],
  entryComponents: [ErrorDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
