import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { environment } from '../environments/environment';
import {
  OKTA_CONFIG,
  OktaAuthModule,
} from '@okta/okta-angular';
import { AppRoutingModule } from './routing/app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RequestComponent } from './request/request.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { FormsModule } from '@angular/forms';
import { ThanksComponent } from './thanks/thanks.component';
import { TextbookInfoComponent } from './textbook-info/textbook-info.component';

import { LoginComponent } from './login/login.component';

import { LendbookComponent } from './lendbook/lendbook.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { IsOverduePipe } from './pipes/is-overdue.pipe';
import { HistoryComponent } from './history/history.component';
import { LendStatusComponent } from './lend-status/lend-status.component';



const oktaConfig = {
  issuer: 'https://dev-634171.okta.com/oauth2/default',
  clientId: '0oaaenlguTQO8nQWc4x6',
  redirectUri: environment.redirectUrl,
  pkce: true
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    RequestComponent,
    CatalogueComponent,
    ThanksComponent,
    TextbookInfoComponent,
    LoginComponent,
    AdminPanelComponent,
    LendbookComponent,
    IsOverduePipe,
    HistoryComponent,
    LendStatusComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    OktaAuthModule,
    
  ],
  providers: [
    { provide: OKTA_CONFIG, useValue: oktaConfig },
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }

