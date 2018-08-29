import {NgModule} from "@angular/core";
import {Routes, RouterModule} from '@angular/router';
import {AuthGuard} from "./guards/auth.guard";

// Page components
import {
    IndexComponent,
    AboutComponent,
    CareerComponent,
    LocationComponent,
    ContactsComponent,
    ProjectsDetailComponent,
    ProjectsAllComponent,
    LoginComponent
} from './pages/pages';

const routes: Routes = [
    {
        path: '',
        component: IndexComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'career',
        component: CareerComponent
    },
    {
        path: 'location',
        component: LocationComponent
    },
    {
        path: 'contacts',
        component: ContactsComponent
    },
    {
        path: 'project-detail/:id',
        component: ProjectsDetailComponent
    },
    {
        path: 'projects-all',
        component: ProjectsAllComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'edit-content',
        loadChildren: './modules/edit-content/edit-content.module#EditContentModule',
        canActivate: [AuthGuard]
    },
    {
        path: '**',
        redirectTo: '',
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
