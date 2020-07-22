import { Component, OnInit } from '@angular/core';
import { ContactUs } from './../shared/contactus';   

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  states = [
    {value: 'CA', text: 'California'},
    {value: 'VA', text: 'Virginia'},
    {value: 'NC', text: 'North Carolina'}
  ];

  contact: ContactUs = {
    name: 'Mathew Tai',
    phone: '+18004579',
    email: '2110 Makcessson Dr',
    address: ' P.O.BOX 55',
    city: ' Richmond',
    state: 'Va',
    zipcode: '23235'
  };
  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log('Conatct', this.contact);
  }

  }
