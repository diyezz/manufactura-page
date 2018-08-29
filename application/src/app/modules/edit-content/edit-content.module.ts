import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {EditContentRoutingModule} from './edit-content-routing.module';
import {EditProjectsComponent} from './components/edit-projects/edit-projects.component';
import {EditProjectsService} from "./services/edit-projects.service";
import {FormsModule} from "@angular/forms";
import {
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    MatSelectModule
} from "@angular/material";

@NgModule({
    imports: [
        CommonModule,
        EditContentRoutingModule,
        FormsModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatInputModule,
        MatFormFieldModule,
        MatSelectModule
    ],
    declarations: [
        EditProjectsComponent
    ],
    providers: [
        EditProjectsService
    ]
})
export class EditContentModule {
}
