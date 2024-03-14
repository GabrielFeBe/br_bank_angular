import { Component } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import LoginObj from '../../utils/loginClass';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
password:string = '';
email:string = '';
constructor(private service:LoginService, private router:Router, private cookies:CookieService){}

login(){
  this.service.login(
new LoginObj(this.email, this.password
  )
  ).subscribe((res)=>{
    this.cookies.set('auth',res);
    this.router.navigate(['/account'])
  },(err)=>{
    alert("algum erro, " + err.message)
  },
  ()=>{

  })
}

}
