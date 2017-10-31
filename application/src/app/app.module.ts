import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Components
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SocialListComponent } from './components/social-list/social-list.component';

// Pages
import { IndexComponent } from './pages/index/index.component';
import { HeadlineSliderComponent } from './components/headline-slider/headline-slider.component';
import { ProjectsSliderComponent } from './components/projects-slider/projects-slider.component';

// Providers
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    IndexComponent,
    SocialListComponent,
    HeadlineSliderComponent,
    ProjectsSliderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
