import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  selected:boolean = false;
  isLoged:boolean = false;
  
constructor(private location:Location, private cookies:CookieService){}

ngOnInit(): void {
  this.isLoged = !!this.cookies.get('auth');
}
selectedToggle(){
  this.selected = !this.selected;
}

logout(){
this.cookies.delete('auth');
this.selectedToggle();
this.location.replaceState('/');
window.location.reload();
}

}
