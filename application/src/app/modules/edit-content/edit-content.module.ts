import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {EditContentRoutingModule} from './edit-content-routing.module';
import {EditProjectsComponent} from './components/edit-projects/edit-projects.component';
import {EditProjectsService} from "./services/edit-projects.service";

@NgModule({
    imports: [
        CommonModule,
        EditContentRoutingModule
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
