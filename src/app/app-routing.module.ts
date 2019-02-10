import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListingComponent } from './user-listing/user-listing.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserCreateEditComponent } from "./user-create-edit/user-create-edit.component";

//This is my case
const routes: Routes = [
    {
        path: 'users', children: [
            { path: '', component: UserListingComponent },
            { path: 'create', component: UserCreateEditComponent },
            { path: 'details/:id', component: UserDetailsComponent },
            { path: 'edit/:id', component: UserCreateEditComponent },
        ]
        // ,
        // data: {
        //     breadcrumb: 'Campaigns'
        // }
    },

    {path: "**", redirectTo: "/users", pathMatch:"full", canActivate: [] },
    //{ path: "", component: UserListingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
//export const RoutingComponents = [EmployeeListComponent, DepartmentListComponent, DepartmentDetailsComponent];