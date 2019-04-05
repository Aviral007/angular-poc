import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
// import { HttpClient } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AuthPublicGuard } from './public/public-guards/auth.guard';
import { AuthPrivateGuard } from './private/private-guards/auth-private-guards.guard';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    // PublicModule
   
  ],
  providers: [AuthPublicGuard,AuthPrivateGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
