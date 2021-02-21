import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  crypto:string="crypto";
  hosting:string="hosting";
  vpn:string="vpn";
  ecommerce:string="ecommerce";
  clothing:string="clothing";
  travel:string="travel";
  entertainment:string="entertainment";
  constructor() { }

  ngOnInit(): void {
  }

}
