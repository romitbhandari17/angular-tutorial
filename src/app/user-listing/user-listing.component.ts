import { UsersService } from '../users.service';
import { Component, OnInit } from '@angular/core';
import { RoutingService } from '../_services/routing.service';

@Component({
  selector: 'user-listing',
  templateUrl: './user-listing.component.html',
  styleUrls: ['./user-listing.component.css']
})
export class UserListingComponent implements OnInit {

  constructor(private userService:UsersService,
  private routingService: RoutingService) { 
  }

  public users=[];

  ngOnInit() {
    this.users=this.userService.getUsers();
  }

  goToDetails(user){
    this.routingService.showView('user-details',null, user);
  }

  goToEdit(userId){
    this.routingService.showView('user-edit',null, userId);
  }

  goToCreateUser(){
    this.routingService.showView('user-create',null, null);
  }

}
