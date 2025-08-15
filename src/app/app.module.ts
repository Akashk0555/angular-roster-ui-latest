import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { App } from './app.component';
import { Dashboard } from './components/dashboard/dashboard';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddComment } from './components/add-comment/add-comment';
import { SideBar } from './components/side-bar/side-bar';
import { TopBar } from './components/top-bar/top-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShowComponent } from './components/show/show.component';

@NgModule({
  declarations: [
    App,
    Dashboard,
    AddComment,
    SideBar,
    TopBar,
    ShowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [App]
})
export class AppModule { }
