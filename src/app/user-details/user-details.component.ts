import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  constructor(private userService:UsersService,
    private activatedRoute: ActivatedRoute) { }

  public users=[];
  private paramsSubs: any;
  private userId:number;

  ngOnInit() {
    console.log('inside user details component');
    this.users=this.userService.getUsers();

    this.paramsSubs = this.activatedRoute.params
        .subscribe((params) => {
            this.userId = +params['id'];
            console.log('userId in Drill Down=', this.userId);
            //this.loadDashboardDetails(this.orderId);
        });
  }
}
