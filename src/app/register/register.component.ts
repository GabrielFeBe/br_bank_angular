import { Component } from '@angular/core';
import Account from '../../utils/account';
import { RegisterService } from './register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
email = '';
password = '';
confirmPassword = '';
cpf = '';
name = '';
type:string | null = null;

constructor(private service:RegisterService, private router:Router){}

registerPerson(){
  console.log(this.type);
  const account = new Account(this.name, this.email,this.password,this.cpf,this.type);
  this.service.createAccount(account).subscribe((res)=>{
    this.router.navigate(['/login'])
  },
  (err)=>{
alert("algum erro, " + err.message)

  },
  ()=>{})
}

}
