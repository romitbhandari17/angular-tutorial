import { UsersService } from '../users.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from "@angular/forms";
import { FormGroup } from "@angular/forms";
import { Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";

@Component({
  selector: 'app-user-create-edit',
  templateUrl: './user-create-edit.component.html',
  styleUrls: ['./user-create-edit.component.css']
})
export class UserCreateEditComponent implements OnInit {

  userForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
  private router: Router,private activatedRoute: ActivatedRoute,
  private usersService:UsersService) { }

  public submitted:boolean=false;
  private paramsSubs:any;
  private user:any;
  private userId:number;
  ngOnInit() {
    this.userForm = this.formBuilder.group({
            id: null,
            userName: ['', Validators.required],
            userAge: ['', Validators.required],
            userCity: ['']
        });

    if(this.router.url.includes('users/edit')){

      this.paramsSubs = this.activatedRoute.params
      .subscribe((params) => {
          this.userId = params['id'];
          //console.log('params=',this.userId );
          this.user=this.usersService.getUsersById(this.userId);
          //console.log('user=',this.user );
            this.userForm.patchValue({
              id:this.user.id,
              userName: this.user.name,
              userCity: this.user.city,
              userAge: this.user.age
            });
      });
    }

  }

  onSubmit(){
    this.submitted = true;
    console.log(this.userForm.value);

    // stop here if form is invalid
    if (this.userForm.invalid) {
      return;
    }

    // Now submit to save the create/edit form controls
    // id-null means create and id != null means edit
  }

  get f() { return this.userForm.controls; }

}
