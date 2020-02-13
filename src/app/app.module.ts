import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgIdleKeepaliveModule } from '@ng-idle/keepalive';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ProfileComponent } from './profile/profile.component';
import { InvalidComponent } from './invalid/invalid.component';
import { NewsService } from './services/news.service';
import { AuthService } from './services/auth.service';
import { LoginComponent } from './login/login.component';
import { SettingsModule } from './settings/settings.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    ProfileComponent,
    InvalidComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgIdleKeepaliveModule.forRoot(),
    SettingsModule,
    AppRoutingModule,
  ],
  providers: [NewsService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
