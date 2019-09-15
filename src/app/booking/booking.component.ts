import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute }            from '@angular/router';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  userId = '';
  phNumber : number;
  email : string;
  userName : string;
  userRole : string;
  userDetails = {"users":[{"id":1,"username":"tushar82das@hcl.com","password":"test@123","name":"Tushar Das","address":"hcl","phone":"7377163306","role":"employee"},{"id":2,"username":"akash123@hcl.com","password":"test@123","name":"Akash Mishra","address":"hcl","phone":"9778454182","role":"admin"}],"requests":[{"id":1,"user_id":1,"slot_id":39,"slot_name":"D009","start_time":"12-09-2019","end_time":"22-09-2019","status":true,"cancel":false}],"slots":[{"row":[{"id":1,"name":"A001","status":true},{"id":2,"name":"A002","status":false},{"id":3,"name":"A003","status":false},{"id":4,"name":"A004","status":true}]},{"row":[{"id":1,"name":"B001","status":true},{"id":2,"name":"B002","status":false},{"id":3,"name":"B003","status":false},{"id":4,"name":"B004","status":true}]}]}

  constructor(private router: Router,private activatedRoute:ActivatedRoute) { }
 bookSlot(slotName,index){
  this.userDetails.slots[index].row.filter((e) => {return e.name === slotName})[0].status = true;
  console.log(slotName + 'index' + index);
 }

 surrenderSlot(slotName,index){
   this.userDetails.slots[index].row.filter((e) => {return e.name === slotName})[0].status = false;
   console.log(slotName + 'index' + index);
 }
  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.userId = decodeURIComponent(params['userName']);
      let userDetailsById = this.userDetails.users.filter((e)=>{return (e.id == this.userId)})[0];
      this.phNumber = userDetailsById.phone;
      this.email =userDetailsById.username;
      this.userName = userDetailsById.name;
      this.userRole = userDetailsById.role;
    });
  }

}
