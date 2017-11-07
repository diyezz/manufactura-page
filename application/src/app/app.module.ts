import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SlickModule } from "ngx-slick";

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FilterPipe } from "./pipes/filter.pipe";

// Providers
import { HttpClientModule } from "@angular/common/http";

// Services
import { DataService } from "./services/data.service";

// Components
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SocialListComponent } from './components/social-list/social-list.component';
import { PartnersSliderComponent } from './components/partners-slider/partners-slider.component';
import { HeadlineSliderComponent } from './components/headline-slider/headline-slider.component';
import { ProjectsSliderComponent } from './components/projects-slider/projects-slider.component';

// Pages
import {
    IndexComponent,
    AboutComponent,
    CareerComponent,
    LocationComponent,
    ContactsComponent,
    ProjectsDetailComponent
} from './pages/pages';

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
    ContactsComponent,
    FilterPipe,
    ProjectsDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SlickModule.forRoot()
  ],
  providers: [
      DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
