import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import {
  OktaAuthModule,
  OktaCallbackComponent,
} from '@okta/okta-angular';
import { HomeComponent } from './home/home.component';
import { CallbackComponent } from './callback/callback.component';
import { AdminComponent } from './admin/admin.component';
import { CreateblogComponent } from './admin/createblog/createblog.component';
import { BloglistComponent } from './admin/bloglist/bloglist.component';
import { UsersComponent } from './admin/users/users.component';
import {  UserscreateComponent} from './admin/userscreate/userscreate.component';

const appRoutes: Routes = [
  {path: 'implicit/callback', component: OktaCallbackComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'createblog', component: CreateblogComponent},
  {path: 'bloglist', component: BloglistComponent},
  {path: 'users', component: UsersComponent},
  {path: 'userscreate', component: UserscreateComponent}
]

const config = {
  issuer: 'https://${https://dev-473904.okta.com}/oauth2/default',
  redirectUri: 'http://localhost/%7B4200%7D/implicit/callback',
  clientId: '{0oaeodzehgdIshqic4x6}',
  pkce: true
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CallbackComponent,
    AdminComponent,
    CreateblogComponent,
    BloglistComponent,
    UsersComponent,
    UserscreateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    OktaAuthModule.initAuth(config)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
