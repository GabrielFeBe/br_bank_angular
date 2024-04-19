import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import LoginObj from '../../utils/loginClass';
import { CookieService } from 'ngx-cookie-service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{
password:string = '';
email:string = '';
constructor(private service:LoginService, private router:Router, private cookies:CookieService, private location:Location){}
 
ngOnInit(): void {
 const token = this.cookies.get('auth')
  const element = document.querySelector('body');
  console.log(element)
  const login = document.querySelector('main');
  login!.style.height = `calc(100dvh - ${element!.clientHeight}px )`;
  // login!.style.height = '100vh'
  if(token) this.router.navigate(['/profile'])
}

login(){
  this.service.login(
new LoginObj(this.email, this.password
  )
  ).subscribe((res)=>{
    this.cookies.set('auth',res.token, {expires: 1});
    this.location.replaceState('/profile');
    window.location.reload();
  },(err)=>{
    console.log(err)
    alert("algum erro, " + err.message)
  },
  ()=>{

  })
}

}
