import { Component, OnInit } from '@angular/core';
import {eventNames} from 'cluster';
import {element} from 'protractor';

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

   dropContentFunction(){

    if(document.getElementById('hey').style.display == '') {

      var dropBTN = document.getElementById('hey').style.display = 'block';
    }
    else
    {
      var dropBTN = document.getElementById('hey').style.display='';
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
}
