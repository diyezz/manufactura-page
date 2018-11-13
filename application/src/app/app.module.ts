import {BrowserModule} from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';
import {ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

// Custom modules
import {SlickModule} from "ngx-slick";

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {FilterPipe} from "./pipes/filter.pipe";
import {ClickOutside} from "./directives/click-outside.directive";

// Providers
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";

// Services
import {DataService} from "./services/data.service";

// Components
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {SocialListComponent} from './components/social-list/social-list.component';
import {PartnersSliderComponent} from './components/partners-slider/partners-slider.component';
import {HeadlineSliderComponent} from './components/headline-slider/headline-slider.component';
import {ProjectsSliderComponent} from './components/projects-slider/projects-slider.component';

// Pages
import {
    IndexComponent,
    AboutComponent,
    CareerComponent,
    LocationComponent,
    ContactsComponent,
    ProjectsDetailComponent,
    ProjectsAllComponent
} from './pages/pages';

import {JwtInterceptor} from "./interceptors/jwt.interceptor";
import {ErrorInterceptor} from "./interceptors/error.interceptor";
import {fakeBackendProvider} from "./_helpers/fake-backend";
import {LoginComponent} from './pages/login/login.component';
import {MatIconModule, MatProgressSpinnerModule} from "@angular/material";
import {AgmCoreModule} from "@agm/core";
import {TranslateService} from "./translate.service";
import { TranslatePipe } from './translate.pipe';


export function setupTranslateFactory(
    service: TranslateService): Function {
    return () => service.use();
}

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
        ProjectsDetailComponent,
        ProjectsAllComponent,
        LoginComponent,
        FilterPipe,
        ClickOutside,
        TranslatePipe
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        AppRoutingModule,
        ReactiveFormsModule,
        MatIconModule,
        MatProgressSpinnerModule,
        SlickModule.forRoot(),
        AgmCoreModule.forRoot(
            {
                apiKey: 'AIzaSyDLKDCwRSdQrWwwbhHyxnFaKR0ojm8tTwk'
            }
        )
    ],
    providers: [
        DataService,
        {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
        {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},

        // provider used to create fake backend
        fakeBackendProvider,
        TranslateService,
        {
            provide: APP_INITIALIZER,
            useFactory: setupTranslateFactory,
            deps: [ TranslateService ],
            multi: true
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
