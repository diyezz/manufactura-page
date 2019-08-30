import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {EditContentRoutingModule} from './edit-content-routing.module';
import {EditProjectsComponent} from './components/edit-projects/edit-projects.component';
import {EditProjectsService} from './services/edit-projects.service';
import {DataService} from '../../services/data.service';
import {FormsModule} from '@angular/forms';
import {
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    MatSelectModule,
    MatListModule,
    MatIconModule, MatProgressSpinnerModule, MatCardModule, MatButtonModule
} from '@angular/material';

import {EditContentMainPageComponent} from './components/edit-content-main-page/edit-content-main-page.component';
import {EditContentNavbarComponent} from './components/edit-content-navbar/edit-content-navbar.component';

@NgModule({
    imports: [
        CommonModule,
        EditContentRoutingModule,
        FormsModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatInputModule,
        MatFormFieldModule,
        MatSelectModule,
        MatListModule,
        MatIconModule,
        MatProgressSpinnerModule,
        MatCardModule,
        MatButtonModule
    ],
    declarations: [
        EditProjectsComponent,
        EditContentMainPageComponent,
        EditContentNavbarComponent
    ],
    providers: [
        EditProjectsService,
        DataService
    ]
})
export class EditContentModule {
}
