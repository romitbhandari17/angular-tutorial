import { RoutingService } from './_services/routing.service';
import { UsersService } from './users.service';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestComponentComponent } from './test-component/test-component.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserListingComponent } from './user-listing/user-listing.component';
import { PipesComponent } from './pipes/pipes.component';
import { AppRoutingModule } from './app-routing.module';
import { BindingComponent } from "src/app/binding/binding.component";
import { NgIfComponent } from "src/app/ng-if/ng-if.component";
import { NgSwitchComponent } from "src/app/ng-switch/ng-switch.component";
import { NgForComponent } from "src/app/ng-for/ng-for.component";
import { DataFlowComponent } from "src/app/data-flow/data-flow.component";
import { UserCreateEditComponent } from './user-create-edit/user-create-edit.component';
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    TestComponentComponent,
    UserDetailsComponent,
    UserListingComponent,
    PipesComponent,
    BindingComponent,
    NgIfComponent,
    NgSwitchComponent,
    NgForComponent,
    DataFlowComponent,
    UserCreateEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [UsersService, RoutingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
