import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@shared/services/auth.service';
import { StorageService } from '@shared/services/storage.service';
import { UserModelAPI } from '../../models/user.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  currentUser!: any;
  public errorMessage = '';

  constructor(
    private storageService: StorageService,
    private authService: AuthService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.currentUser = this.storageService.getUser();
  }
  // Delete User
  deleteUser(): void {
    // console.log(this.currentUser)
    this.authService.deleteUserService(this.currentUser.email).subscribe(
      response => {
        console.log(response); // Handle successful response
      },
      error => {
        console.error(error); // Handle error response
      }
    );
    this.storageService.clean();
    this.router.navigate(['/register'])
  }
}
