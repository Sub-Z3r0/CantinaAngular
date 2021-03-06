import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthenticationService} from '../shared/Service/authentication.service';

@Component({
  selector: 'app-nvbar',
  templateUrl: './nvbar.component.html',
  styleUrls: ['./nvbar.component.css']
})
export class NvbarComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  loading = false;
  usernames: string;
  errormessage = '';
  loggedIn: boolean;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private authenticationService: AuthenticationService) {
    this.usernames = authenticationService.getUsername();
  }

  ngOnInit() {
    if (this.authenticationService.getToken()) {
      this.loggedIn = true;
    }
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

   dropContentFunction() {
    if (document.getElementById('dropbtn').style.display == '') {
      let dropBTN = document.getElementById('dropbtn').style.display = 'block';
    } else {
      let dropBTN = document.getElementById('dropbtn').style.display = '';
    }
  }

  logout() {
    this.authenticationService.logout();
    window.location.reload();
  }

  get username() { return this.loginForm.get('username'); }
  get password() { return this.loginForm.get('password'); }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
    this.loading = true;
    this.authenticationService.login(this.username.value, this.password.value)
      .subscribe(
        success => {
          this.router.navigate(['']);
          document.getElementById('id01').style.display = 'none';
          window.location.reload();
        },
        error => {
          this.errormessage = error.message;
          this.loading = false;
        });
  }
}
