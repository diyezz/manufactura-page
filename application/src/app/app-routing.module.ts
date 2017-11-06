import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

// Page components
import {
    IndexComponent,
    AboutComponent,
    CareerComponent,
    LocationComponent,
    ContactsComponent
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
        path: 'contact',
        component: ContactsComponent
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
export class AppRoutingModule { }
