import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { routing } from '../app.routing';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { About } from './components/about/about';
import { Skills } from './components/skills/skills';
import { Contact } from './components/contact/contact';
import { Experience } from './components/experience/experience';
import { Training } from './components/training/training';
import { Home } from './components/home/home';
import { Header } from './components/header/header';

@NgModule({
  declarations: [
    App,
    About,
    Skills,
    Contact,
    Experience,
    Training,
    Home,
    Header
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [App]
})
export class AppModule { }
