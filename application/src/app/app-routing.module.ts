import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

// Page components
import {IndexComponent} from "./pages/index/index.component";
import {AboutComponent} from "./pages/about/about.component";
import {CareerComponent} from "./pages/career/career.component";
import {LocationComponent} from "./pages/location/location.component";
import {ContactsComponent} from "./pages/contacts/contacts.component";

const routes: Routes = [
    {
        path: 'index',
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
        path: '**',
        redirectTo: 'index',
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
