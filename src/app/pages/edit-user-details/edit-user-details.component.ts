import { Component } from '@angular/core';
import { User } from '../../model/users.model';
import { UsersService } from '../../services/users.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-user-details',
  templateUrl: './edit-user-details.component.html',
  styleUrl: './edit-user-details.component.css'
})
export class EditUserDetailsComponent {
userData: User | null = null;
  editMode = false;
  dialogOpened = false;
  cityOptions = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix'];
  userId:number;
  constructor(private userService:UsersService, private route:ActivatedRoute, private router: Router)
  {
    this.userId=this.route.snapshot.params['id'];

  }
  ngOnInit(): void {
  if(this.userId){
    this.userService.getUser(this.userId).subscribe((data:User)=>{
      this.userData=data;
    });
  } 
}

updateUser(){
  if(this.userData){
this.userService.UpdateUser(this.userId,this.userData).subscribe({
  next: (data) => {
    console.log("data updated successfully",data);
    this.close();
    this.router.navigate(['/users']);
  },
  error: (error) => {
    console.log("error",error);
  }
});
}
}
cancel(){
  this.editMode=false;
}
open(Component:string){
  this.dialogOpened=true;
}
close(){
  this.dialogOpened=false;
}
}
