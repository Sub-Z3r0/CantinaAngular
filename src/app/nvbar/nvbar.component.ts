import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nvbar',
  templateUrl: './nvbar.component.html',
  styleUrls: ['./nvbar.component.css']
})
export class NvbarComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    var navbar = document.getElementById('navbar');
    var sticky = navbar.offsetTop;


    window.onscroll = function() {
      if (window.pageYOffset >= sticky) {
        navbar.classList.add('sticky')
      } else {
        navbar.classList.remove('sticky');
      }};

  }
  loginBar = true;

   dropContentFunction(){

    if(document.getElementById('hey').style.display == '') {

      var dropBTN = document.getElementById('hey').style.display = 'block';
    }
    else
    {
      var dropBTN = document.getElementById('hey').style.display='';
    }

  }


}
