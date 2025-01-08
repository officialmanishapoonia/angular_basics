import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { User } from '../../model/users.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit{
  
  constructor(private userService:UsersService) { }
  usersData:User[]=[];
  ngOnInit(): void {
    this.userService.getUsers().subscribe((data)=>{
      this.usersData=data;
      console.log(this.usersData);
    });
  }

  delete(id:number)
  {
    this.userService.deleteUser(id).subscribe({
      next: (data) => {
        console.log("deleted successfully",data["name"]);
        this.usersData=this.usersData.filter((user)=>user.id!=id);
      },
      error: (error) => {
        console.log("error",error);
      }
    });
  }


}
