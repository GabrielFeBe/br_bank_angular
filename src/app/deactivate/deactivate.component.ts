import { Component } from '@angular/core';
import { DeactivateService } from './deactivate.service';
import { CookieService } from 'ngx-cookie-service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-deactivate',
  templateUrl: './deactivate.component.html',
  styleUrl: './deactivate.component.scss'
})
export class DeactivateComponent {

constructor(private service:DeactivateService, private cookies:CookieService, private location:Location){}

deactivateAccount(){
  this.service.deactivateAccount().subscribe((res)=>{
    this.cookies.delete('auth');
    this.location.replaceState('/');
    window.location.reload();
  },(err)=>{
    alert("Server Error");
  },()=>{})
}

}
