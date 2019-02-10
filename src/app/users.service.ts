import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  getUsers(){
      return [
      { "id": 1, "name": "manan", "age":30,"city":"bangalore"},
      { "id": 2, "name": "ajay", "age":20,"city":"delhi"},
      { "id": 3, "name": "nayan", "age":30,"city":"mumbai"}
    ];
  }

  getUsersById(userId){
      let users:any=[];
      if(userId == 1){
        users.id=userId;
        users.name="manan";
        users.age=30;
        users.city="1";
      }else if( userId == 2 ){
        users.id=userId;
        users.name="ajay";
        users.age=20;
        users.city="2";
      }else if( userId == 3 ){
        users.id=userId;
        users.name="nayan";
        users.age=30;
        users.city="3";
      }
      return users;
  }

}
