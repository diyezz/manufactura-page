import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {EditProjectsComponent} from "./components/edit-projects/edit-projects.component";
import {EditContentMainPageComponent} from "./components/edit-content-main-page/edit-content-main-page.component";

const routes: Routes = [
    {
        path: '', component: EditContentMainPageComponent
    },
    {
        path: 'projects', component: EditProjectsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EditContentRoutingModule {
}
