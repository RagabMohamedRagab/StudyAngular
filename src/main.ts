import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/Shared/app.config'
import { App } from './app/Shared/app';
import { provideHttpClient } from '@angular/common/http';


bootstrapApplication(App,{
  providers: [
    appConfig.providers,
    provideHttpClient()  // HttpClient متاح دلوقتي لكل Standalone Component
  ]
})
  .catch((err) => console.error(err));
