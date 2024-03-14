import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  selected:boolean = false;
  
constructor(){}

ngOnInit(): void {
}
selectedToggle(){
  this.selected = !this.selected;
}

}
