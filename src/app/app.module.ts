import {InjectionToken, NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {UserComponent} from './user/user.component';
import {UsersComponent} from './users/users.component';
import {LoggingService} from "../data/services/logging.service";
import {AdminComponent} from './admin/admin.component';
import {CompanyService} from "../data/services/company.service";

export const COMPANY_SERVICE_TOKEN = new InjectionToken<CompanyService>('COMPANY_SERVICE');

export function getCompanyServiceProvider(): CompanyService {
  return new CompanyService();
}

export const USER_AGENT = new InjectionToken<CompanyService>('USER_AGENT');
export const SCREEN_WITH = new InjectionToken<CompanyService>('SCREEN_WITH');
export const SCREEN_HEIGHT = new InjectionToken<CompanyService>('SCREEN_HEIGHT');

export const DEVICE_NAME_TOKEN = new InjectionToken<string>('DEVICE_NAME_TOKEN');

export function getDeviceNameProvider(
  userAgent: string,
  screenWith: string,
  screenHeight: string): string {
  return userAgent + "-" + screenWith + "-" + screenHeight;
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    UsersComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    LoggingService,
    // CompanyService,
    {provide: COMPANY_SERVICE_TOKEN, useFactory: getCompanyServiceProvider},
    // {provide: CompanyService, useClass: CompanyService},
    // {provide: LoggingService, useClass: LoggingService},
    {provide: 'API_BASE_URL', useValue: 'api.domain.com/v1'},

    {provide: USER_AGENT, useValue: window.navigator.userAgent},
    {provide: SCREEN_WITH, useValue: window.screen.width},
    {provide: SCREEN_HEIGHT, useValue: window.screen.height},

    {
      provide: DEVICE_NAME_TOKEN,
      useFactory: getDeviceNameProvider,
      deps: [
        USER_AGENT,
        SCREEN_WITH, SCREEN_HEIGHT
      ]
    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
