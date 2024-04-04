import { Component, OnInit } from '@angular/core';
import { StatementService } from './statement.service';

@Component({
  selector: 'app-statement',
  templateUrl: './statement.component.html',
  styleUrl: './statement.component.scss'
})
export class StatementComponent implements OnInit {

  transactions: any = null;

  constructor(private service:StatementService){}

  ngOnInit(): void {
    this.service.getBankStatment().subscribe((res)=>{
      this.transactions = res;
      console.log(res);
    },(err)=>{
      console.log(err)
      alert("Some error ocurred")
    },()=>{});
  }


}
