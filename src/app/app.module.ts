import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Auth/components/login/login.component';
import { RegisterComponent } from './Auth/components/register/register.component';
import { HomeComponent } from './Auth/components/home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, provideHttpClient, withInterceptors } from '@angular/common/http';
import { errorInterceptor, jwtInterceptor } from './helpers';
import { AlertComponent } from './Shared';

@NgModule({
  declarations: [
    //AppComponent,
    //LoginComponent,
    // RegisterComponent,
    // HomeComponent,
    //AlertComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    //AppRoutingModule,
    AlertComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent
  ],
  providers: [
    // this for classess
    //{ provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    //{ provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    // provider used to create fake backend
    //fakeBackendProvider, 
    //other way to implement or include functions 
    // this for functions 
    //provideHttpClient(withInterceptors([errorInterceptor])),
    // provideHttpClient(withInterceptors([jwtInterceptor])),
  ],
  //bootstrap: [AppComponent]
})
export class AppModule { }
