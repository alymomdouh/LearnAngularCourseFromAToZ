import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from '@app/app.component';
import { APP_ROUTES } from '@app/app-routing.module';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { errorInterceptor, fakeBackendInterceptor, jwtInterceptor } from '@app/helpers';
import { provideRouter } from '@angular/router';


// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));
// this way to include function and Interceptor here inseated of app module  
bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(APP_ROUTES),
    provideHttpClient(
      withInterceptors([
        jwtInterceptor,
        errorInterceptor, 
        // fake backend
        fakeBackendInterceptor
      ])
    )
  ]
});
