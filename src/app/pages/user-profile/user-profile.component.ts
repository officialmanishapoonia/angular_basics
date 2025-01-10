import { Component, OnInit } from '@angular/core';
import { UpdateData, User } from '../../model/users.model';
import { UsersService } from '../../services/users.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LoaderService } from '../../services/loader.service';
import { delay } from 'rxjs';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent implements OnInit {

  userData: User | null = null;
  editMode = false;
  dialogOpened = false;
  cityOptions = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix'];
  userId:number;
  constructor(private userService:UsersService,private route:ActivatedRoute,private loaderService:LoaderService,private router:Router)
  {
    this.userId=this.route.snapshot.params['id'];

  }
  ngOnInit(): void {
  if(this.userId){
    this.loaderService.showLoader();
    this.userService.getUser(this.userId).pipe(delay(3000)).subscribe({
      next: (data) => {
        this.userData = data;
        // this.loaderService.hideLoader();
      },
      error: (error) => {
        console.log("error",error);
        this.router.navigate(['/not-found']);
        this.loaderService.hideLoader();
    },
  complete: () => {
    console.log("complete");
    this.loaderService.hideLoader();
  }
});
  } 
}

updateUser(){
  if(this.userData){
this.userService.UpdateUser(this.userId,this.userData).subscribe({
  next: (data) => {
    console.log("data updated successfully",data);
    this.editMode=false;
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


  

