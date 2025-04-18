// src/main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';

// bootstrapApplication(AppComponent, {
//   providers: [
//     provideHttpClient() // ✅ This is what registers HttpClient
//   ]
// });
bootstrapApplication(AppComponent, {providers: [
  provideHttpClient(),
]});