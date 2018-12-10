import { Component, OnInit } from '@angular/core';
import {eventNames} from 'cluster';
import {element} from 'protractor';
import {tryCatch} from 'rxjs/internal-compatibility';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthenticationService} from '../Shared/Service/authentication.service';

@Component({
  selector: 'app-nvbar',
  templateUrl: './nvbar.component.html',
  styleUrls: ['./nvbar.component.css']
})
export class NvbarComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  loading = false;
  errormessage = '';
  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private authenticationService: AuthenticationService) {
  }

  ngOnInit() {
    var navbar = document.getElementById('navbar');

    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    // reset login status
    this.authenticationService.logout();


    window.onscroll = function() {
      if (window.pageYOffset >= sticky) {
        navbar.classList.add('sticky')
      } else {
        navbar.classList.remove('sticky');
      }};

  }

   dropContentFunction(){

    if(document.getElementById('dropbtn').style.display == '') {

      var dropBTN = document.getElementById('dropbtn').style.display = 'block';
    }
    else
    {
      var dropBTN = document.getElementById('dropbtn').style.display='';
    }

  }

  Scroll() {
    window.scrollTo({
      top: document.getElementById('MenuList').offsetTop,
      left: document.getElementById('MenuList').offsetLeft,
      behavior: 'smooth'
    })
  }
  Scroll2() {
    window.scrollTo({
      top: document.getElementById('OfferList').offsetTop,
      left: document.getElementById('OfferList').offsetLeft,
      behavior: 'smooth'
    })
  }
  Scroll3(){
    window.scrollTo({
      top: 0,
      left: 1,
      behavior: 'smooth'
    })
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
          this.router.navigate(['adminview']);
        },
        error => {
          this.errormessage = error.message;
          this.loading = false;
        });
  }
}
