import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  username: string ;
  password: string ;
  userList = [{"id":1,"username":"tushar82das@hcl.com","password":"test@123","name":"Tushar Das","address":"hcl","phone":"7377163306","role":"employee"},{"id":2,"username":"akash123@hcl.com","password":"test@123","name":"Akash Mishra","address":"hcl","phone":"9778454182","role":"admin"}];
  isError: boolean = false;
  userLogin() {
    const userId = this.userList.filter((e)=>{return e.username === this.username})
    if(userId.length > 0 ){
      this.router.navigate(['/booking',userId[0].id]);
    }

  }
  constructor(private router: Router) {
   }

  ngOnInit() {
    this.username = "";
    this.password = "";
  }



}
