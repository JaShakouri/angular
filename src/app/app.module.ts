import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { UsersComponent } from './users/users.component';
import { SwitchCase1Component } from './switch-case1/switch-case1.component';
import { SwitchCase2Component } from './switch-case2/switch-case2.component';
import { SwitchCase3Component } from './switch-case3/switch-case3.component';

@NgModule({
  declarations: [
    AppComponent,UserComponent, UsersComponent, SwitchCase1Component, SwitchCase2Component, SwitchCase3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
