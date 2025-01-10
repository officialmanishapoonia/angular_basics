import { Component } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { UsersService } from '../../services/users.service';
import { LoaderService } from '../../services/loader.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent {
entryForm: FormGroup; // Form Group
cities=['a','b'];
  

constructor(private fb: FormBuilder,private usersService:UsersService,private loaderService:LoaderService,private route:Router) {
  this.entryForm = this.fb.group({
    username: ['', Validators.required],
    name: ['', Validators.required,Validators.pattern('^[a-zA-Z]+$')],
    email: ['', Validators.required,Validators.email],
    phone: ['', Validators.required],
    website: ['', Validators.required],
    address: this.fb.group({
      street: ['', Validators.required],
      suite: ['', Validators.required],
      city: ['', Validators.required],
      zipcode: ['', Validators.required]
    }),

    company: this.fb.group({
      name: ['', Validators.required],
      catchPhrase: ['', Validators.required],
      bs: ['', Validators.required]
    })
 
    
    


    // Define your form controls here
  });

}

async onSubmit() {
  if(this.entryForm.valid){
  this.loaderService.showLoader();
  this.usersService.addUser(this.entryForm.value).subscribe({
    next: (data) => {
      console.log(data);
      console.log('User added successfully');
      this.loaderService.hideLoader();
      this.route.navigate(['/users']);
      
    },
    error: (error) => {
      console.log(error);
      console.log('Error while adding user');
      this.loaderService.hideLoader();
    }
  });
}
else{
  console.log('Please fill the form');
  this.entryForm.markAllAsTouched();
  
}
}

}

