import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import Account from '../../utils/account';
import { ProfileService } from './profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit {

constructor(private cookies:CookieService, private router:Router, private service:ProfileService){}
  balance = 0;
  account:any | null = null;
  amount = 0;
  cpf = ''
  accountToTransfer: any | null = null;

  ngOnInit(): void {
    const token = this.cookies.get('auth');
    if(!token) this.router.navigate(['/login']);
     this.service.getAccount().subscribe((res)=>{
      this.account = res;
    },(err)=>{ console.log(err)}, ()=>{})
  }


  depositMoney(){
    this.service.depositMoney(this.balance).subscribe((res)=>{
      this.account.balance = res;
    },(err)=>{
      console.log(err)
    },()=>{})
  }

  prepareTransfer(){
    this.service.prepareTransfer(this.cpf).subscribe((res)=>{
      this.accountToTransfer = res;
      console.log(this.accountToTransfer);
    },(err)=>{},()=>{})
  }

  confirmTransfer(){
    this.service.confirmTransfer(this.cpf, this.amount).subscribe((res)=>{
      this.accountToTransfer = null;
      this.account.balance = res;
    },(err)=>{
      alert(err.error)
      this.accountToTransfer = null;
    },()=>{})
  }

cancelTransfer() {
  this.accountToTransfer = null;
}


}
