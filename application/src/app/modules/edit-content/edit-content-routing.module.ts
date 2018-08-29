import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditProjectsComponent } from "./components/edit-projects/edit-projects.component";

const routes: Routes = [
    {
      path: '', component: EditProjectsComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditContentRoutingModule { }
