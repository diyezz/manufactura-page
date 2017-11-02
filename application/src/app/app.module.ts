import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';

// Providers
import {HttpClientModule} from "@angular/common/http";
import { PartnersSliderComponent } from './components/partners-slider/partners-slider.component';

// Components
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SocialListComponent } from './components/social-list/social-list.component';
import { HeadlineSliderComponent } from './components/headline-slider/headline-slider.component';
import { ProjectsSliderComponent } from './components/projects-slider/projects-slider.component';

// Pages
import { IndexComponent } from './pages/index/index.component';
import { AboutComponent } from './pages/about/about.component';
import { CareerComponent } from './pages/career/career.component';
import { LocationComponent } from './pages/location/location.component';
import { ContactsComponent } from './pages/contacts/contacts.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    IndexComponent,
    SocialListComponent,
    HeadlineSliderComponent,
    ProjectsSliderComponent,
    PartnersSliderComponent,
    AboutComponent,
    CareerComponent,
    LocationComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
