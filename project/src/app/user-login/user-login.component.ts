import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.css'
})
export class UserLoginComponent {
  email: string = '';
  password: string = '';

  constructor(private userService: UserService,private router:Router,private toastr: ToastrService) { }

  
  m:any;
  onSubmit() {
    this.userService.login(this.email, this.password).subscribe(
     (response:string) => { 
      this.m=response;
        // this.userService.uId=this.m; //assign the userId here
        // Store the user ID in session storage
        sessionStorage.setItem('uId', this.m);
        this.router.navigate(['/userProducts'])
      },
      (error) => {
        console.error('Login failed', error);
        // alert("Wrong email or password");
        // this.toastr.remove('Product added to cart successfully', 'Remove');
        this.toastr.success('Wrong email or password');
      }
    );
  }
}
