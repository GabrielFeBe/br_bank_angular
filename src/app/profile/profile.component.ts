import { Component, OnInit } from '@angular/core';
import { ProfileService } from './profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit {

constructor(  private service:ProfileService){}
  balance = 0;
  account:any | null = null;
  amount = 0;
  cpf = ''
  accountToTransfer: any | null = null;
  password:string='';

  ngOnInit(): void {
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
    },(err)=>{},()=>{})
  }

  confirmTransfer(){
    this.service.confirmTransfer(this.cpf, this.amount, this.password).subscribe((res)=>{
      this.accountToTransfer = null;
      this.account.balance = res;
      this.cpf = '';
      this.amount = 0;
      alert('Transação efetuada com sucesso')
    },(err)=>{
      alert(err.error)
      this.accountToTransfer = null;
    },()=>{})
  }

cancelTransfer() {
  this.accountToTransfer = null;
}


}
